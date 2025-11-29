var JavascriptObfuscator = {
  ["detect"]: function (str) {
    return new RegExp("^var _0x[a-f0-9]+ ?\\= ?\\[", "")["test"](str);
  },
  ["unpack"]: function (str) {
    if (JavascriptObfuscator["detect"](str)) {
      var matches = new RegExp("var (_0x[a-f\\d]+) ?\\= ?\\[(.*?)\\];", "")["exec"](str);
      if (matches) {
        var var_name = matches[1];
        var strings = JavascriptObfuscator["_smart_split"](matches[2]);
        str = str["substring"](matches[0]["length"]);
        for (var k in strings) {
          str = str["replace"](new RegExp(var_name + '\\[' + k + '\\]', 'g'), JavascriptObfuscator["_fix_quotes"](JavascriptObfuscator["_unescape"](strings[k])));
        }
      }
    }
    return str;
  },
  ["_fix_quotes"]: function (str) {
    function* PdI7uM(slKK7_c, I8aL6kx, pHFL1n, EFCVRP = {
      ["LlAXqQU"]: {}
    }) {
      while (slKK7_c + I8aL6kx + pHFL1n !== -203) {
        with (EFCVRP["h5IFlt7"] || EFCVRP) {
          __p_TJh7: switch (slKK7_c + I8aL6kx + pHFL1n) {
            case slKK7_c - 24:
              EFCVRP["h5IFlt7"] = EFCVRP["LlAXqQU"], slKK7_c += 96, I8aL6kx += 275, pHFL1n += -449;
              break __p_TJh7;
            case -122:
            case -210:
            case slKK7_c - 240:
              str = RLyI_B[slKK7_c + -142];
              str = "'" + str["replace"](new RegExp("'", "g"), "\\'") + "'";
              EFCVRP["h5IFlt7"] = EFCVRP["LlAXqQU"], I8aL6kx += 518, pHFL1n += -476;
              break __p_TJh7;
            case pHFL1n - -46:
              [EFCVRP["LlAXqQU"]["ktrudg"]] = [-43];
              str = RLyI_B[1];
              str = "'" + str["replace"](new RegExp("'", "g"), "\\'") + "'";
              EFCVRP["h5IFlt7"] = EFCVRP["LlAXqQU"], slKK7_c += 65, I8aL6kx += 96, pHFL1n += -36;
              break __p_TJh7;
            case 179:
              [EFCVRP["LlAXqQU"]["ktrudg"]] = [-127];
              LlAXqQU["RLyI_B"] = new RegExp("^\"(.*)\"$", "")["exec"](str);
              if (LlAXqQU["RLyI_B"]) {
                EFCVRP["h5IFlt7"] = EFCVRP["LlAXqQU"], slKK7_c += 391, I8aL6kx += -432, pHFL1n += -235;
                break __p_TJh7;
              } else {
                EFCVRP["h5IFlt7"] = EFCVRP["LlAXqQU"], slKK7_c += 391, I8aL6kx += 86, pHFL1n += -711;
                break __p_TJh7;
              }
            case 0:
            case 158:
            case EFCVRP["LlAXqQU"]["ktrudg"] + 63:
              EFCVRP["h5IFlt7"] = EFCVRP["LlAXqQU"], slKK7_c += 252, I8aL6kx += 145, pHFL1n += -388;
              break __p_TJh7;
            case EFCVRP["LlAXqQU"]["ktrudg"] + 81:
            case -215:
            case 151:
              EFCVRP["h5IFlt7"] = EFCVRP["LlAXqQU"], slKK7_c += 365, I8aL6kx += -443, pHFL1n += 27;
              break __p_TJh7;
            case -184:
              str = RLyI_B[1];
              str = "'" + str["replace"](new RegExp("'", "g"), "\\'") + "'";
              EFCVRP["h5IFlt7"] = EFCVRP["LlAXqQU"], slKK7_c += 495, I8aL6kx += 145, pHFL1n += -511;
              break __p_TJh7;
            case -212:
            case -75:
            case -55:
              return I51PD0c = true, str;
              EFCVRP["h5IFlt7"] = EFCVRP["gkaCJm"], slKK7_c += -261, I8aL6kx += -141, pHFL1n += 254;
              break __p_TJh7;
            default:
            case -49:
            case I8aL6kx - 102:
              EFCVRP["h5IFlt7"] = EFCVRP["g3rOcjx"], slKK7_c += -130, I8aL6kx += -271, pHFL1n += 433;
              break __p_TJh7;
            case 233:
            case slKK7_c - 79:
            case -202:
              EFCVRP["h5IFlt7"] = EFCVRP["LlAXqQU"], slKK7_c += -269, I8aL6kx += 70, pHFL1n += 185;
              break __p_TJh7;
          }
        }
      }
    }
    var I51PD0c;
    var LPtdSTu = PdI7uM(-248, -22, 449)["next"]()["value"];
    if (I51PD0c) {
      return LPtdSTu;
    }
  },
  ["_smart_split"]: function (str) {
    function* IyhpOR(vlQMEen, n8sNW3, mbijVDq, rtWkCg = {
      ["XmabiS"]: {}
    }) {
      while (vlQMEen + n8sNW3 + mbijVDq !== -244) {
        with (rtWkCg["mGegqg"] || rtWkCg) {
          __p_E1ii: switch (vlQMEen + n8sNW3 + mbijVDq) {
            case -139:
            case 204:
              [rtWkCg["XmabiS"]["TKcCOs"], rtWkCg["XmabiS"]["dH79FCD"], rtWkCg["XmabiS"]["VnimbN"]] = [133, -139, -116];
              XmabiS["lsNAVr"] = [];
              XmabiS["vR7pZf"] = 0;
              rtWkCg["mGegqg"] = rtWkCg["XmabiS"], vlQMEen += 106, n8sNW3 += -67, mbijVDq += 291;
              break __p_E1ii;
            case vlQMEen - 406:
            case n8sNW3 - -216:
            default:
            case 230:
              while (vR7pZf < str["length"]) {
                if (str["charAt"](vR7pZf) === '"') {
                  rtWkCg["XmabiS"]["Yp1HK6Z"] = '';
                  vR7pZf += 1;
                  while (vR7pZf < str["length"]) {
                    if (str["charAt"](vR7pZf) === '"') {
                      break;
                    }
                    if (str["charAt"](vR7pZf) === '\\') {
                      Yp1HK6Z += '\\';
                      vR7pZf++;
                    }
                    Yp1HK6Z += str["charAt"](vR7pZf);
                    vR7pZf++;
                  }
                  lsNAVr["push"]('"' + Yp1HK6Z + '"');
                }
                vR7pZf += vlQMEen + -47;
              }
              return o2Xa79f = true, lsNAVr;
              rtWkCg["mGegqg"] = rtWkCg["Ihuuvm"], n8sNW3 += -16, mbijVDq += -419;
              break __p_E1ii;
              if (vlQMEen < n8sNW3 + 73) {
                rtWkCg["mGegqg"] = rtWkCg["XmabiS"], vlQMEen += 330, n8sNW3 += 114, mbijVDq += -419;
                break __p_E1ii;
              }
            case rtWkCg["XmabiS"]["VnimbN"] + 332:
            case 40:
              rtWkCg["mGegqg"] = rtWkCg["XmabiS"], vlQMEen += -330, n8sNW3 += -114, mbijVDq += 419;
              break __p_E1ii;
            case rtWkCg["XmabiS"]["TKcCOs"] + -371:
              [rtWkCg["XmabiS"]["TKcCOs"], rtWkCg["XmabiS"]["dH79FCD"], rtWkCg["XmabiS"]["VnimbN"]] = [220, 97, -175];
              while (vR7pZf < str["length"]) {
                if (str["charAt"](vR7pZf) === '"') {
                  Yp1HK6Z = '';
                  vR7pZf += vlQMEen + 355;
                  while (vR7pZf < str["length"]) {
                    if (str["charAt"](vR7pZf) === '"') {
                      break;
                    }
                    if (str["charAt"](vR7pZf) === '\\') {
                      Yp1HK6Z += '\\';
                      vR7pZf++;
                    }
                    Yp1HK6Z += str["charAt"](vR7pZf);
                    vR7pZf++;
                  }
                  lsNAVr["push"]('"' + Yp1HK6Z + '"');
                }
                vR7pZf += vlQMEen + 355;
              }
              return o2Xa79f = true, lsNAVr;
              rtWkCg["mGegqg"] = rtWkCg["QM1xed"], vlQMEen += 402, n8sNW3 += -4, mbijVDq += -404;
              break __p_E1ii;
              if (vlQMEen < 48) {
                rtWkCg["mGegqg"] = rtWkCg["XmabiS"], vlQMEen += 732, n8sNW3 += 126, mbijVDq += -404;
                break __p_E1ii;
              }
          }
        }
      }
    }
    var o2Xa79f;
    var dOSgWHQ = IyhpOR(-58, 42, -123)["next"]()["value"];
    if (o2Xa79f) {
      return dOSgWHQ;
    }
  },
  ["_unescape"]: function (str) {
    function* i3UHLaE(drMjEl, DIuPL9S, IRTA5p = {
      ["luOJDw"]: {}
    }) {
      while (drMjEl + DIuPL9S !== -34) {
        with (IRTA5p["ITqQbK_"] || IRTA5p) {
          __p_jpdD: switch (drMjEl + DIuPL9S) {
            case 191:
            default:
              [IRTA5p["luOJDw"]["Knpwvll"], IRTA5p["luOJDw"]["qIi65BK"]] = [-125, 240];
              for (luOJDw["SuSQwW"] = drMjEl + -119; luOJDw["SuSQwW"] < 128; luOJDw["SuSQwW"]++) {
                str = str["replace"](new RegExp('\\\\x' + luOJDw["SuSQwW"]["toString"](drMjEl + -135), 'ig'), String["fromCharCode"](luOJDw["SuSQwW"]));
              }
              str = str["replace"](new RegExp("\\\\x09", "g"), "\t");
              return dD4109a = true, str;
              drMjEl += -84, DIuPL9S += -141;
              break __p_jpdD;
            case DIuPL9S - -165:
            case -77:
            case 111:
              IRTA5p["ITqQbK_"] = IRTA5p["luOJDw"], drMjEl += -140;
              break __p_jpdD;
            case -210:
            case 44:
            case 116:
              IRTA5p["ITqQbK_"] = IRTA5p["_WLIje"], drMjEl += -33, DIuPL9S += -117;
              break __p_jpdD;
            case drMjEl - -214:
              [IRTA5p["luOJDw"]["Knpwvll"], IRTA5p["luOJDw"]["qIi65BK"]] = [104, -233];
            case DIuPL9S != -423 && DIuPL9S - -213:
              IRTA5p["ITqQbK_"] = IRTA5p["luOJDw"], drMjEl += -188, DIuPL9S += -182;
              break __p_jpdD;
            case DIuPL9S - 25:
              [IRTA5p["luOJDw"]["Knpwvll"], IRTA5p["luOJDw"]["qIi65BK"]] = [33, 62];
              IRTA5p["ITqQbK_"] = IRTA5p["luOJDw"], drMjEl += 190, DIuPL9S += -266;
              break __p_jpdD;
              if (drMjEl == -(drMjEl + 235)) {
                IRTA5p["ITqQbK_"] = IRTA5p["LalMFva"], drMjEl += 92, DIuPL9S += -183;
                break __p_jpdD;
              }
            case -159:
              IRTA5p["ITqQbK_"] = IRTA5p["iCHzGDF"], drMjEl += 42, DIuPL9S += 83;
              break __p_jpdD;
              if (DIuPL9S > -184) {
                IRTA5p["ITqQbK_"] = IRTA5p["luOJDw"], drMjEl += 75, DIuPL9S += 200;
                break __p_jpdD;
              }
            case -137:
            case DIuPL9S != 16 && DIuPL9S - -100:
          }
        }
      }
    }
    var dD4109a;
    var ENNup2V = i3UHLaE(151, 40)["next"]()["value"];
    if (dD4109a) {
      return ENNup2V;
    }
  },
  ["run_tests"]: function (sanity_test) {
    function* nVEaxys(T54l94, RQorJz, QeWFPgK = {
      ["dcdG1OW"]: {}
    }) {
      while (T54l94 + RQorJz !== 40) {
        with (QeWFPgK["Qe3Tft"] || QeWFPgK) {
          __p_iylD: switch (T54l94 + RQorJz) {
            case 28:
            case 30:
            case -60:
              cPqXmO["expect"]('\\x40', '@');
              cPqXmO["expect"]('\\x10', '\\x10');
              cPqXmO["expect"]('\\x1', '\\x1');
              cPqXmO["expect"]("\\x61\\x62\\x22\\x63\\x64", 'ab"cd');
              cPqXmO["test_function"](JavascriptObfuscator["detect"], 'JavascriptObfuscator.detect');
              QeWFPgK["Qe3Tft"] = QeWFPgK["dcdG1OW"], T54l94 += -445, RQorJz += 214;
              break __p_iylD;
            default:
            case 31:
            case -240:
              [QeWFPgK["dcdG1OW"]["x9q3fVT"]] = [104];
              dcdG1OW["cPqXmO"] = sanity_test || new SanityTest();
              dcdG1OW["cPqXmO"]["test_function"](JavascriptObfuscator["_smart_split"], "JavascriptObfuscator._smart_split");
              QeWFPgK["Qe3Tft"] = QeWFPgK["dcdG1OW"], T54l94 += -24, RQorJz += 66;
              break __p_iylD;
            case 37:
            case RQorJz - -287:
            case 92:
              cPqXmO["expect"]('"aaa","bbbb"', ['"aaa"', '"bbbb"']);
              cPqXmO["expect"]('"a", "b\\\""', ['"a"', '"b\\\""']);
              cPqXmO["test_function"](JavascriptObfuscator["_unescape"], 'JavascriptObfuscator._unescape');
              QeWFPgK["Qe3Tft"] = QeWFPgK["dcdG1OW"], T54l94 += -121;
              break __p_iylD;
            case T54l94 - 42:
              [QeWFPgK["dcdG1OW"]["x9q3fVT"]] = [-42];
            case 222:
            case RQorJz != 257 && RQorJz - 217:
              QeWFPgK["Qe3Tft"] = QeWFPgK["dcdG1OW"], T54l94 += 504, RQorJz += -318;
              break __p_iylD;
            case RQorJz - -209:
            case 106:
            case 21:
              cPqXmO["expect"]('', []);
              cPqXmO["expect"]('"a", "b"', ['"a"', '"b"']);
              QeWFPgK["Qe3Tft"] = QeWFPgK["dcdG1OW"], T54l94 += 78;
              break __p_iylD;
            case T54l94 - -78:
              cPqXmO["expect"]('', false);
              cPqXmO["expect"]('abcd', T54l94 != -(T54l94 + 558));
              cPqXmO["expect"]('var _0xaaaa', T54l94 == 188);
              cPqXmO["expect"]('var _0xaaaa = ["a", "b"]', true);
              QeWFPgK["Qe3Tft"] = QeWFPgK["dcdG1OW"], T54l94 += -160, RQorJz += 140;
              break __p_iylD;
              if (RQorJz != T54l94 + 357) {
                QeWFPgK["Qe3Tft"] = QeWFPgK["dcdG1OW"], T54l94 += -160, RQorJz += 140;
                break __p_iylD;
              }
            case RQorJz - 439:
            case 90:
              cPqXmO["expect"]('var _0xaaaa=["a", "b"]', T54l94 != T54l94 + 537);
              cPqXmO["expect"]('var _0x1234=["a","b"]', true);
              return qp5F2Dc = true, cPqXmO;
              QeWFPgK["Qe3Tft"] = QeWFPgK["lqSCqj"], T54l94 += 222, RQorJz += 39;
              break __p_iylD;
              if (RQorJz < T54l94 + 657) {
                QeWFPgK["Qe3Tft"] = QeWFPgK["dcdG1OW"], T54l94 += 222, RQorJz += -36;
                break __p_iylD;
              }
          }
        }
      }
    }
    var qp5F2Dc;
    var GdkujjL = nVEaxys(233, -202)["next"]()["value"];
    if (qp5F2Dc) {
      return GdkujjL;
    }
  }
};