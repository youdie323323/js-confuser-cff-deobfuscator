import * as parser from "@babel/parser";
import type { NodePath } from "@babel/traverse";
import traverse from "@babel/traverse";
import generate from "@babel/generator";
import * as t from "@babel/types";
import { readFileSync, stat, writeFileSync } from "fs";
import { webcrack } from "webcrack";

type LiteralConstants = Record<string, number>;

type FlowPositions = Record<string, number>;

const removeStatementFromConsequent = (ourCase: t.SwitchCase, statement: t.Statement) =>
    ourCase.consequent = ourCase.consequent.filter(innerStatement => innerStatement !== statement);

const numericLiteralOrUnaryExpressionToValue = (node: t.Expression): number =>
    t.isNumericLiteral(node)
        ? node.value
        : (
            (
                t.isUnaryExpression(node) &&
                t.isNumericLiteral(node.argument) &&
                node.operator === "-"
            )
                ? -node.argument.value
                : 0
        );

function findNonEmptyCase(
    cases: Array<t.SwitchCase>,
    targetCase: t.SwitchCase,
): t.SwitchCase | null {
    if (targetCase.consequent.length > 0)
        return targetCase;

    const targetIndex = cases.indexOf(targetCase);
    if (targetIndex === -1)
        return null;

    for (let i = targetIndex + 1; i < cases.length; i++) {
        const nextCase = cases[i];

        if (nextCase.consequent.length > 0)
            return nextCase;
    }

    return null;
}

(async function () {
    const obfuscatedCode = readFileSync("input/obfuscated.js").toString();

    const { code: webcrackedObfuscatedCode } = await webcrack(obfuscatedCode);

    const ast = parser.parse(webcrackedObfuscatedCode);

    traverse(ast, {
        FunctionDeclaration(path) {
            const { node, scope } = path;

            if (!node.generator)
                return;

            const { params, id: { name } } = node;

            const { length: paramsLength } = params;
            if (paramsLength === 0)
                return;

            const binding = scope.getBinding(name);
            if (!binding)
                return;

            const flowPositionParams = params.slice(0, paramsLength - 1);
            const lastParam = params[paramsLength - 1];

            const { referencePaths } = binding;

            if (referencePaths.length !== 1)
                return;

            const { 0: cffStartFunction } = referencePaths;

            const { parent: cffStartCall } = cffStartFunction;

            if (!(
                t.isCallExpression(cffStartCall) &&
                cffStartCall.arguments.length === flowPositionParams.length
            ))
                return;

            if (!(
                flowPositionParams.every(node => t.isIdentifier(node)) &&
                t.isAssignmentPattern(lastParam) &&
                t.isIdentifier(lastParam.left) &&
                t.isObjectExpression(lastParam.right)
            ))
                return;

            const resultDeclaration = cffStartFunction.findParent(({ node }) => t.isVariableDeclaration(node));
            if (!(
                resultDeclaration &&
                t.isVariableDeclaration(resultDeclaration.node)
            ))
                return;

            const { parent: resultDeclarationParent } = resultDeclaration as NodePath<t.VariableDeclaration>;

            if (!t.isBlock(resultDeclarationParent))
                return;

            const { body: resultDeclarationParentBody } = resultDeclarationParent;

            const cffShouldReturnValueDeclarationPosition = resultDeclarationParentBody.indexOf(resultDeclaration.node) - 1;
            if (cffShouldReturnValueDeclarationPosition < 0)
                return;

            const cffShouldReturnValueDeclaration = resultDeclarationParentBody[cffShouldReturnValueDeclarationPosition];
            if (!(
                t.isVariableDeclaration(cffShouldReturnValueDeclaration) &&
                cffShouldReturnValueDeclaration.declarations.length === 1 &&
                t.isIdentifier(cffShouldReturnValueDeclaration.declarations[0].id)
            ))
                return;

            const { id: { name: cffShouldReturnValueDeclarationName } } = cffShouldReturnValueDeclaration.declarations[0];

            const { left: { name: constantHolderName } } = lastParam;

            if (!(
                lastParam.right.properties.length === 1 &&
                t.isObjectProperty(lastParam.right.properties[0]) &&
                t.isIdentifier(lastParam.right.properties[0].key) &&
                t.isObjectExpression(lastParam.right.properties[0].value)
            ))
                return;

            const { key: { name: constantHolderInternalPropertyName } } = lastParam.right.properties[0];

            // We determined that the path is CFF generator function

            const flowPositionParamNames = flowPositionParams.map(
                param =>
                    t.isIdentifier(param)
                        ? param.name
                        : null,
            );

            const flowPositionParamNameSet = new Set(flowPositionParamNames);

            const flowPositions: Record<string, number> = {};

            cffStartCall.arguments.forEach((node, i) => {
                flowPositions[flowPositionParamNames[i]] =
                    numericLiteralOrUnaryExpressionToValue(node as t.Expression);
            });

            const isBinaryExpressionInvolvingAllConstantParams = (expression: t.Node): boolean => {
                if (t.isIdentifier(expression))
                    return flowPositionParamNameSet.has(expression.name);

                if (t.isBinaryExpression(expression) && expression.operator === "+")
                    return isBinaryExpressionInvolvingAllConstantParams(expression.left) &&
                        isBinaryExpressionInvolvingAllConstantParams(expression.right);

                return false;
            };

            let cffDispatchSwitch: NodePath<t.SwitchStatement>;

            let constantHolderWithContextPropertyName: string;

            traverse(node, {
                SwitchStatement(innerPath) {
                    const { node: { discriminant, cases } } = innerPath;

                    if (isBinaryExpressionInvolvingAllConstantParams(discriminant)) {
                        cffDispatchSwitch = innerPath;

                        console.log("CFF dispatch switch found, eliminating deadcode...");

                        // Remove statement after break or return
                        cases.forEach(({ consequent }) => {
                            for (let i = 0; i < consequent.length; i++) {
                                if (t.isReturnStatement(consequent[i])) {
                                    consequent.splice(i + 1, consequent.length - (i + 1));

                                    break;
                                }
                            }

                            for (let i = 0; i < consequent.length; i++) {
                                if (t.isBreakStatement(consequent[i])) {
                                    consequent.splice(i + 1, consequent.length - (i + 1));

                                    break;
                                }
                            }
                        });
                    }
                },

                WithStatement(innerPath) {
                    const { node: innerNode } = innerPath;

                    if (
                        t.isLogicalExpression(innerNode.object) &&
                        t.isMemberExpression(innerNode.object.left) &&
                        t.isIdentifier(innerNode.object.left.object, { name: constantHolderName }) &&
                        t.isIdentifier(innerNode.object.left.property) &&
                        t.isIdentifier(innerNode.object.right, { name: constantHolderName })
                    )
                        constantHolderWithContextPropertyName = innerNode.object.left.property.name;
                },

                ExpressionStatement(innerPath) {
                    const { node: innerNode, parent } = innerPath;
                    const { expression } = innerNode;

                    if (t.isAssignmentExpression(expression)) {
                        if (!(
                            t.isArrayPattern(expression.left) &&
                            t.isArrayExpression(expression.right)
                        ))
                            return;

                        if (!t.isSwitchCase(parent))
                            return;

                        const indexOfInnerNode = parent.consequent.indexOf(innerNode);
                        if (indexOfInnerNode === -1)
                            return;

                        expression.left.elements.forEach((element, i) => {
                            parent.consequent.splice(indexOfInnerNode, 0, t.expressionStatement(
                                t.assignmentExpression(
                                    expression.operator,
                                    element as t.LVal,
                                    (expression.right as t.ArrayExpression).elements[i] as t.Expression,
                                ),
                            ));
                        });

                        console.log("Simplified destructuring assignment to multiple assignments");

                        innerPath.remove();
                    }
                },
            }, path.scope);

            // Dispatch switch not found
            if (!cffDispatchSwitch)
                return;

            { // Log informations
                console.log("Constant holder:", constantHolderName);
                console.log("Constant holder internal property:", constantHolderInternalPropertyName);
                console.log("Constant holder with context property:", constantHolderWithContextPropertyName);
            }

            const { node: cffDispatchSwitchNode } = cffDispatchSwitch;

            const finalizeFlowStatements = (ourCase: t.SwitchCase): t.SwitchCase => {
                const clonedCase = t.cloneNode(ourCase, true);

                clonedCase.consequent = clonedCase.consequent.filter(statement => !t.isBreakStatement(statement));

                clonedCase.consequent.forEach((statement) => {
                    if (isLiteralConstantsStepStatement(statement))
                        removeStatementFromConsequent(clonedCase, statement);
                });

                clonedCase.consequent.forEach((statement, i) => {
                    if (
                        t.isReturnStatement(statement) &&
                        statement.argument
                    ) {
                        const cffShouldReturnValueDeclarationTrueAssignment =
                            clonedCase.consequent.slice(0, i)
                                .find(node => (
                                    t.isExpressionStatement(node) &&
                                    t.isAssignmentExpression(node.expression) &&
                                    t.isIdentifier(node.expression.left, { name: cffShouldReturnValueDeclarationName }) &&
                                    t.isBooleanLiteral(node.expression.right) &&
                                    node.expression.right.value
                                ));

                        if (cffShouldReturnValueDeclarationTrueAssignment)
                            removeStatementFromConsequent(clonedCase, cffShouldReturnValueDeclarationTrueAssignment);
                        else
                            clonedCase.consequent[i] = t.expressionStatement(statement.argument);
                    }
                });

                clonedCase.consequent.forEach(statement => {
                    if (
                        t.isExpressionStatement(statement) &&
                        t.isAssignmentExpression(statement.expression) &&
                        statement.expression.operator === "+=" &&
                        t.isIdentifier(statement.expression.left) &&
                        flowPositionParamNameSet.has(statement.expression.left.name)
                    )
                        removeStatementFromConsequent(clonedCase, statement);
                });

                clonedCase.consequent.forEach(statement => {
                    if (isStatementFlowWithContextChange(statement))
                        removeStatementFromConsequent(clonedCase, statement);
                });

                return clonedCase;
            };

            const originalBlockBody: Array<t.Statement> = new Array();

            let flowWithContext: string = constantHolderName;

            const summateFlowPositions = (flowPositions: FlowPositions): number =>
                Object.values(flowPositions).reduce(
                    (accumulator, position) => accumulator + position,
                    0,
                );

            const dynamicComputeFlowsWithFlowPositions = (
                cases: Array<t.SwitchCase>,
                literalConstants: LiteralConstants,
            ) =>
                cases.map(ourCase => {
                    if (ourCase.test)
                        try {
                            const { code } = generate(ourCase.test);

                            // We"re not going to replace test, because next dynamicComputeSwitchCasesWithFlowPositions call uses test

                            const clonedOurCase = t.cloneNode(ourCase, true);

                            const value = new Function(
                                ...flowPositionParamNameSet,
                                constantHolderName,
                                "return " + code,
                            )(
                                ...Object.values(flowPositions),
                                {
                                    [constantHolderInternalPropertyName]: literalConstants,
                                },
                            );

                            console.log(`Dynamically computed switch case value "${code}" ->`, value);

                            clonedOurCase.test = t.valueToNode(value);

                            return clonedOurCase;
                        } catch (e) { }

                    return ourCase;
                });

            const isLiteralConstantsStepStatement = (statement: t.Statement): statement is t.ExpressionStatement & {
                expression: t.AssignmentExpression & {
                    left: t.MemberExpression & {
                        object: t.MemberExpression & {
                            object: t.Identifier;
                            property: t.Identifier;
                        };
                        property: t.Identifier;
                    };
                    right: t.Node;
                };
            } =>
                t.isExpressionStatement(statement) &&
                t.isAssignmentExpression(statement.expression) &&
                statement.expression.operator === "=" &&
                t.isMemberExpression(statement.expression.left) &&
                t.isMemberExpression(statement.expression.left.object) &&
                t.isIdentifier(statement.expression.left.object.object, { name: constantHolderName }) &&
                t.isIdentifier(statement.expression.left.object.property, { name: constantHolderInternalPropertyName }) &&
                t.isIdentifier(statement.expression.left.property);

            const stepLiteralConstantsByFlow = ({ consequent }: t.SwitchCase, literalConstants: LiteralConstants) =>
                consequent.forEach((statement) => {
                    if (isLiteralConstantsStepStatement(statement))
                        literalConstants[statement.expression.left.property.name] =
                            numericLiteralOrUnaryExpressionToValue(statement.expression.right);
                });

            const stepFlowPositionsByFlow = ({ consequent }: t.SwitchCase, flowPositions: FlowPositions) =>
                consequent.forEach(statement => {
                    if (
                        t.isExpressionStatement(statement) &&
                        t.isAssignmentExpression(statement.expression) &&
                        statement.expression.operator === "+=" &&
                        t.isIdentifier(statement.expression.left) &&
                        flowPositionParamNameSet.has(statement.expression.left.name)
                    )
                        flowPositions[statement.expression.left.name] +=
                            numericLiteralOrUnaryExpressionToValue(statement.expression.right);
                });

            const isStatementFlowWithContextChange = (statement: t.Statement) =>
                t.isExpressionStatement(statement) &&
                t.isAssignmentExpression(statement.expression) &&
                statement.expression.operator === "=" &&
                t.isMemberExpression(statement.expression.left) &&
                t.isIdentifier(statement.expression.left.object, { name: constantHolderName }) &&
                t.isIdentifier(statement.expression.left.property, { name: constantHolderWithContextPropertyName }) &&
                t.isMemberExpression(statement.expression.right) &&
                t.isIdentifier(statement.expression.right.object, { name: constantHolderName }) &&
                t.isIdentifier(statement.expression.right.property, { name: constantHolderInternalPropertyName });

            const updateFlowWithContextByFlow = ({ consequent }: t.SwitchCase) =>
                consequent.forEach(statement => {
                    if (isStatementFlowWithContextChange(statement)) {
                        flowWithContext = constantHolderInternalPropertyName;

                        console.log("Flow with context changed:", flowWithContext);
                    }
                });

            const literalConstants: LiteralConstants = {};

            while (true) {
                const dynamicFlows =
                    dynamicComputeFlowsWithFlowPositions(cffDispatchSwitchNode.cases, literalConstants);

                const dynamicDefaultFlow =
                    dynamicFlows.find(ourCase => !ourCase.test);

                const flowPositionsSum = summateFlowPositions(flowPositions);

                console.log("Next flow:", flowPositionsSum);

                const dynamicFlow = findNonEmptyCase(
                    dynamicFlows,
                    dynamicFlows
                        .find(
                            (ourCase) =>
                                ourCase.test &&
                                flowPositionsSum === numericLiteralOrUnaryExpressionToValue(ourCase.test),
                        ) ||
                    // If not found, its default case
                    dynamicDefaultFlow, // TODO: if defaultCFFDispatchSwitchCase is undefined too, return
                );

                // Push to block body for construction
                originalBlockBody.push(...finalizeFlowStatements(dynamicFlow).consequent);

                if (dynamicFlow.consequent.find(statement => t.isReturnStatement(statement))) // If return is found, break the loop
                    break;

                stepLiteralConstantsByFlow(dynamicFlow, literalConstants);
                stepFlowPositionsByFlow(dynamicFlow, flowPositions);

                updateFlowWithContextByFlow(dynamicFlow);
            }

            // Finally we can replace body
            resultDeclarationParent.body = originalBlockBody;
        },
    });

    console.log("Successfully deobfuscated, writing result to output/deobfuscated.js");

    const output = generate(ast);

    writeFileSync("output/deobfuscated.js", output.code);
})();