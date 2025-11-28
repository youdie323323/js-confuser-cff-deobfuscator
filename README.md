# Js-Confuser cff deobfuscator

## Instruction

1. Download and unzip this project
2. Open terminal under unzipped file, then paste and enter:

```bash
npm install
```

And then put the code to deobfuscate, for `input/obfuscated.js`

And then run `index.ts` with:
```bash
npx tsx index.ts
```

You got your terminal printed like:

<details>

<summary>Terminal</summary>

```
CFF dispatch switch found, eliminating deadcode...
Simplified destructuring assignment to multiple assignments
Simplified destructuring assignment to multiple assignments
Constant holder: xJ7W0M_
Constant holder internal property: _6TxUo
Constant holder with context property: skf8if
Dynamically computed switch case value "127" -> 127
Dynamically computed switch case value "177" -> 177
Dynamically computed switch case value "D4j7k3 - -83" -> -117
Dynamically computed switch case value "182" -> 182
Dynamically computed switch case value "-208" -> -208
Dynamically computed switch case value "lH13IN5 - 175" -> -64
Dynamically computed switch case value "gqf9Hja - 165" -> -220
Dynamically computed switch case value "-181" -> -181
Dynamically computed switch case value "xJ7W0M_._6TxUo.wXlctN + 277" -> NaN
Dynamically computed switch case value "202" -> 202
Dynamically computed switch case value "xJ7W0M_._6TxUo.wXlctN + 365" -> NaN
Dynamically computed switch case value "-25" -> -25
Dynamically computed switch case value "-218" -> -218
Dynamically computed switch case value "142" -> 142
Dynamically computed switch case value "D4j7k3 - 203" -> -403
Dynamically computed switch case value "-122" -> -122
Dynamically computed switch case value "40" -> 40
Next flow: -64
Flow with context changed: _6TxUo
Dynamically computed switch case value "127" -> 127
Dynamically computed switch case value "177" -> 177
Dynamically computed switch case value "D4j7k3 - -83" -> 96
Dynamically computed switch case value "182" -> 182
Dynamically computed switch case value "-208" -> -208
Dynamically computed switch case value "lH13IN5 - 175" -> -301
Dynamically computed switch case value "gqf9Hja - 165" -> -33
Dynamically computed switch case value "-181" -> -181
Dynamically computed switch case value "xJ7W0M_._6TxUo.wXlctN + 277" -> 146
Dynamically computed switch case value "202" -> 202
Dynamically computed switch case value "xJ7W0M_._6TxUo.wXlctN + 365" -> 234
Dynamically computed switch case value "-25" -> -25
Dynamically computed switch case value "-218" -> -218
Dynamically computed switch case value "142" -> 142
Dynamically computed switch case value "D4j7k3 - 203" -> -190
Dynamically computed switch case value "-122" -> -122
Dynamically computed switch case value "40" -> 40
Next flow: 96
Flow with context changed: _6TxUo
Dynamically computed switch case value "127" -> 127
Dynamically computed switch case value "177" -> 177
Dynamically computed switch case value "D4j7k3 - -83" -> -276
Dynamically computed switch case value "182" -> 182
Dynamically computed switch case value "-208" -> -208
Dynamically computed switch case value "lH13IN5 - 175" -> -301
Dynamically computed switch case value "gqf9Hja - 165" -> -33
Dynamically computed switch case value "-181" -> -181
Dynamically computed switch case value "xJ7W0M_._6TxUo.wXlctN + 277" -> 146
Dynamically computed switch case value "202" -> 202
Dynamically computed switch case value "xJ7W0M_._6TxUo.wXlctN + 365" -> 234
Dynamically computed switch case value "-25" -> -25
Dynamically computed switch case value "-218" -> -218
Dynamically computed switch case value "142" -> 142
Dynamically computed switch case value "D4j7k3 - 203" -> -562
Dynamically computed switch case value "-122" -> -122
Dynamically computed switch case value "40" -> 40
Next flow: -231
Successfully deobfuscated, writing result to output/deobfuscated.js
```

</details>

Open `output/deobfuscated.js`, and you finally got the deobfuscated code.

## Limitation

You can't deobfuscate, if original un-obfuscated code has branches or similar (especially, in block to control-flow flat)  

**Will support later**
