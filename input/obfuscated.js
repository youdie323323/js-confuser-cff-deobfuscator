(() => {
  if (window["customElements"]) {
    var h = window["HTMLElement"];
    var m = window["customElements"]["define"];
    var n = window["customElements"]["get"];
    var k = new Map();
    var l = new Map();
    var e = !1;
    var f = !1;
    window["HTMLElement"] = function () {
      if (!e) {
        var a = k["get"](this["constructor"]);
        a = n["call"](window["customElements"], a);
        f = !0;
        return new a();
      }
      e = !1;
    };
    window["HTMLElement"]["prototype"] = h["prototype"];
    window["HTMLElement"]["es5Shimmed"] = !0;
    Object["defineProperty"](window, "customElements", {
      ["value"]: window["customElements"],
      ["configurable"]: !0,
      ["writable"]: !0
    });
    Object["defineProperty"](window["customElements"], "define", {
      ["value"]: (a, b) => {
        function* O3UeEIt(gqf9Hja, D4j7k3, lH13IN5, F8brSw, xJ7W0M_ = {
          ["_6TxUo"]: {}
        }) {
          while (gqf9Hja + D4j7k3 + lH13IN5 + F8brSw !== -136) {
            with (xJ7W0M_["skf8if"] || xJ7W0M_) {
              __p_WROv: switch (gqf9Hja + D4j7k3 + lH13IN5 + F8brSw) {
                case 127:
                case 177:
                case D4j7k3 - -83:
                  x7WOs28["observedAttributes"] = b["observedAttributes"];
                  HwXlXX["connectedCallback"] = aqU7X65["connectedCallback"];
                  HwXlXX["disconnectedCallback"] = aqU7X65["disconnectedCallback"];
                  HwXlXX["attributeChangedCallback"] = aqU7X65["attributeChangedCallback"];
                  xJ7W0M_["skf8if"] = xJ7W0M_["_6TxUo"], D4j7k3 += -372, F8brSw += 45;
                  break __p_WROv;
                case 182:
                case -208:
                  [xJ7W0M_["_6TxUo"]["wXlctN"], xJ7W0M_["_6TxUo"]["hSAX8T7"]] = [-207, 20];
                  HwXlXX["adoptedCallback"] = aqU7X65["adoptedCallback"];
                  k["set"](b, a);
                  l["set"](a, b);
                  return neuvAE = true, m["call"](window["customElements"], a, x7WOs28);
                  xJ7W0M_["skf8if"] = xJ7W0M_["m8aUCy"], gqf9Hja += -281, D4j7k3 += -46, lH13IN5 += 61, F8brSw += 338;
                  break __p_WROv;
                case lH13IN5 - 175:
                  [xJ7W0M_["_6TxUo"]["wXlctN"], xJ7W0M_["_6TxUo"]["hSAX8T7"]] = [-131, -94];
                  _6TxUo["aqU7X65"] = b["prototype"];
                  _6TxUo["x7WOs28"] = class extends h {
                    constructor() {
                      super();
                      Object["setPrototypeOf"](this, _6TxUo["aqU7X65"]);
                      if (!f) {
                        e = !0;
                        try {
                          b["call"](this);
                        } catch (p) {
                          throw Error("Constructing "["concat"](a, ": ")["concat"](p));
                        }
                      }
                      f = !1;
                    }
                  };
                  _6TxUo["HwXlXX"] = _6TxUo["x7WOs28"]["prototype"];
                  xJ7W0M_["skf8if"] = xJ7W0M_["_6TxUo"], gqf9Hja += 187, D4j7k3 += 213, lH13IN5 += -237, F8brSw += -3;
                  break __p_WROv;
                  if (D4j7k3 > -37) {
                    ;
                    break __p_WROv;
                  }
                case gqf9Hja - 165:
                  xJ7W0M_["skf8if"] = xJ7W0M_["lowIVct"], gqf9Hja += -347, D4j7k3 += -157, lH13IN5 += 61, F8brSw += 338;
                  break __p_WROv;
                  if (!(D4j7k3 == 227)) {
                    xJ7W0M_["skf8if"] = xJ7W0M_["wzYB9yT"], gqf9Hja += -189, D4j7k3 += -427, lH13IN5 += 298, F8brSw += 285;
                    break __p_WROv;
                  }
                case -181:
                case xJ7W0M_["_6TxUo"]["wXlctN"] + 277:
                case 202:
                  xJ7W0M_["skf8if"] = xJ7W0M_["_6TxUo"], gqf9Hja += 258, D4j7k3 += -57, lH13IN5 += -199, F8brSw += -52;
                  break __p_WROv;
                case xJ7W0M_["_6TxUo"]["wXlctN"] + 365:
                case -25:
                case -218:
                  HwXlXX["adoptedCallback"] = aqU7X65["adoptedCallback"];
                  k["set"](b, a);
                  l["set"](a, b);
                  return neuvAE = true, m["call"](window["customElements"], a, x7WOs28);
                  xJ7W0M_["skf8if"] = xJ7W0M_["QZZjjah"], gqf9Hja += -281, D4j7k3 += -46, lH13IN5 += -381, F8brSw += 338;
                  break __p_WROv;
                case 142:
                case D4j7k3 - 203:
                  x7WOs28["observedAttributes"] = b["observedAttributes"];
                  HwXlXX["connectedCallback"] = aqU7X65["connectedCallback"];
                  HwXlXX["disconnectedCallback"] = aqU7X65["disconnectedCallback"];
                  HwXlXX["attributeChangedCallback"] = aqU7X65["attributeChangedCallback"];
                  xJ7W0M_["skf8if"] = xJ7W0M_["_6TxUo"], gqf9Hja += 574, D4j7k3 += -475, lH13IN5 += -346, F8brSw += 103;
                  break __p_WROv;
                case -122:
                case 40:
                default:
                  HwXlXX["adoptedCallback"] = aqU7X65["adoptedCallback"];
                  k["set"](b, a);
                  l["set"](a, b);
                  return neuvAE = true, m["call"](window["customElements"], a, x7WOs28);
                  xJ7W0M_["skf8if"] = xJ7W0M_["UfRSkY"], gqf9Hja += -345, D4j7k3 += 429, F8brSw += 11;
                  break __p_WROv;
              }
            }
          }
        }
        var neuvAE;
        var mzQOlE = O3UeEIt(-55, -200, 111, 80)["next"]()["value"];
        if (neuvAE) {
          return mzQOlE;
        }
      },
      ["configurable"]: !0,
      ["writable"]: !0
    });
    Object["defineProperty"](window["customElements"], "get", {
      ["value"]: a => {
        return l["get"](a);
      },
      ["configurable"]: !0,
      ["writable"]: !0
    });
    if (navigator["userAgent"]["match"](new RegExp("Version\\/(10\\..*|11\\.0\\..*)Safari", ""))) {
      const a = HTMLElement["prototype"]["constructor"];
      Object["defineProperty"](HTMLElement["prototype"], "constructor", {
        ["configurable"]: !0,
        ["get"]() {
          return a;
        },
        ["set"](b) {
          Object["defineProperty"](this, "constructor", {
            ["value"]: b,
            ["configurable"]: !0,
            ["writable"]: !0
          });
        }
      });
    }
  }
})();