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
        function* cfoSCe(rQkYZMn, d39YMJ, mqFC1h = {
          ["psUqyio"]: {}
        }) {
          while (rQkYZMn + d39YMJ !== -233) {
            with (mqFC1h["UghOTyo"] || mqFC1h) {
              __p_FRMH: switch (rQkYZMn + d39YMJ) {
                case d39YMJ - 186:
                case 242:
                  k["set"](b, a);
                  l["set"](a, b);
                  if (m) {
                    mqFC1h["UghOTyo"] = mqFC1h["psUqyio"], rQkYZMn += -130;
                    break __p_FRMH;
                  } else {
                    mqFC1h["UghOTyo"] = mqFC1h["psUqyio"], rQkYZMn += -118;
                    break __p_FRMH;
                  }
                case d39YMJ - 128:
                case -198:
                case 235:
                  EwWZ7J["disconnectedCallback"] = drae5lD["disconnectedCallback"];
                  EwWZ7J["attributeChangedCallback"] = drae5lD["attributeChangedCallback"];
                  EwWZ7J["adoptedCallback"] = drae5lD["adoptedCallback"];
                  mqFC1h["UghOTyo"] = mqFC1h["psUqyio"], rQkYZMn += -58;
                  break __p_FRMH;
                  if (!(d39YMJ == rQkYZMn + 454)) {
                    mqFC1h["UghOTyo"] = mqFC1h["psUqyio"], rQkYZMn += -188;
                    break __p_FRMH;
                  }
                case d39YMJ != 156 && d39YMJ != 268 && d39YMJ - 72:
                  mqFC1h["UghOTyo"] = mqFC1h["psUqyio"], rQkYZMn += -232, d39YMJ += 229;
                  break __p_FRMH;
                case -85:
                case 196:
                case 143:
                  mqFC1h["UghOTyo"] = mqFC1h["psUqyio"], rQkYZMn += -114, d39YMJ += 58;
                  break __p_FRMH;
                default:
                case d39YMJ - 91:
                case 179:
                  mqFC1h["psUqyio"]["EwWZ7J"] = NINXwgo["prototype"];
                  NINXwgo["observedAttributes"] = b["observedAttributes"];
                  EwWZ7J["connectedCallback"] = drae5lD["connectedCallback"];
                  mqFC1h["UghOTyo"] = mqFC1h["psUqyio"], rQkYZMn += -37, d39YMJ += 250;
                  break __p_FRMH;
                case rQkYZMn != -304 && rQkYZMn != -186 && rQkYZMn != -128 && rQkYZMn - -326:
                  m["call"](window["customElements"], a, NINXwgo);
                  mqFC1h["UghOTyo"] = mqFC1h["psUqyio"], rQkYZMn += 12, d39YMJ += -4;
                  break __p_FRMH;
                case rQkYZMn != -555 && rQkYZMn - -322:
                  mqFC1h["UghOTyo"] = mqFC1h["IziD7rQ"], rQkYZMn += -251;
                  break __p_FRMH;
                case d39YMJ - 118:
                  [mqFC1h["psUqyio"]["BoefGN"], mqFC1h["psUqyio"]["T8cM5G"], mqFC1h["psUqyio"]["W8j7WPj"]] = [-52, -134, 121];
                  k["set"](b, a);
                  l["set"](a, b);
                  if (m) {
                    mqFC1h["UghOTyo"] = mqFC1h["psUqyio"], rQkYZMn += -198, d39YMJ += 197;
                    break __p_FRMH;
                  } else {
                    mqFC1h["UghOTyo"] = mqFC1h["psUqyio"], rQkYZMn += -186, d39YMJ += 197;
                    break __p_FRMH;
                  }
                case mqFC1h["psUqyio"]["BoefGN"] + -317:
                  m["call"](window["customElements"], a, NINXwgo);
                  mqFC1h["UghOTyo"] = mqFC1h["psUqyio"], rQkYZMn += 34, d39YMJ += 166;
                  break __p_FRMH;
                case -71:
                case -128:
                case rQkYZMn - -301:
                case d39YMJ != 268 && d39YMJ != 97 && d39YMJ - 72:
                case -189:
                case 96:
                  mqFC1h["UghOTyo"] = mqFC1h["psUqyio"], d39YMJ += -59;
                  break __p_FRMH;
                  if (!(d39YMJ == rQkYZMn + 228)) {
                    mqFC1h["UghOTyo"] = mqFC1h["psUqyio"], rQkYZMn += -19, d39YMJ += -80;
                    break __p_FRMH;
                  }
                case 72:
                case d39YMJ != 301 && d39YMJ != 156 && d39YMJ - 338:
                case -209:
                  m["call"](window["customElements"], a, NINXwgo);
                  mqFC1h["UghOTyo"] = mqFC1h["psUqyio"], rQkYZMn += 34, d39YMJ += -87;
                  break __p_FRMH;
                case 32:
                case d39YMJ - 271:
                case -129:
                  [mqFC1h["psUqyio"]["BoefGN"], mqFC1h["psUqyio"]["T8cM5G"], mqFC1h["psUqyio"]["W8j7WPj"]] = [135, -68, -226];
                  psUqyio["drae5lD"] = b["prototype"];
                  psUqyio["NINXwgo"] = class extends h {
                    constructor() {
                      super();
                      Object["setPrototypeOf"](this, psUqyio["drae5lD"]);
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
                  mqFC1h["UghOTyo"] = mqFC1h["psUqyio"], rQkYZMn += 180, d39YMJ += 6;
                  break __p_FRMH;
                case mqFC1h["psUqyio"]["W8j7WPj"] + 248:
                  console["log"]("branch else");
                  mqFC1h["UghOTyo"] = mqFC1h["psUqyio"], d39YMJ += -4;
                  break __p_FRMH;
              }
            }
          }
        }
        var d3bdwuJ;
        var HErB13z = cfoSCe(-271, 70)["next"]()["value"];
        if (d3bdwuJ) {
          return HErB13z;
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