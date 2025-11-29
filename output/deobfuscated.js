var JavascriptObfuscator = {
  detect: function (str) {
    return new RegExp("^var _0x[a-f0-9]+ ?\\= ?\\[", "").test(str);
  },
  unpack: function (str) {
    if (JavascriptObfuscator.detect(str)) {
      var matches = new RegExp("var (_0x[a-f\\d]+) ?\\= ?\\[(.*?)\\];", "").exec(str);
      if (matches) {
        var var_name = matches[1];
        var strings = JavascriptObfuscator._smart_split(matches[2]);
        str = str.substring(matches[0].length);
        for (var k in strings) {
          str = str.replace(new RegExp(var_name + "\\[" + k + "\\]", "g"), JavascriptObfuscator._fix_quotes(JavascriptObfuscator._unescape(strings[k])));
        }
      }
    }
    return str;
  },
  _fix_quotes: function (str) {
    LlAXqQU.RLyI_B = new RegExp("^\"(.*)\"$", "").exec(str);
    if (LlAXqQU.RLyI_B) {
      str = RLyI_B[1];
      str = "'" + str.replace(new RegExp("'", "g"), "\\'") + "'";
      return str;
    } else {
      return str;
    }
  },
  _smart_split: function (str) {
    XmabiS.lsNAVr = [];
    XmabiS.vR7pZf = 0;
    while (vR7pZf < str.length) {
      if (str.charAt(vR7pZf) === "\"") {
        rtWkCg.XmabiS.Yp1HK6Z = "";
        vR7pZf += 1;
        while (vR7pZf < str.length) {
          if (str.charAt(vR7pZf) === "\"") {
            break;
          }
          if (str.charAt(vR7pZf) === "\\") {
            Yp1HK6Z += "\\";
            vR7pZf++;
          }
          Yp1HK6Z += str.charAt(vR7pZf);
          vR7pZf++;
        }
        lsNAVr.push("\"" + Yp1HK6Z + "\"");
      }
      vR7pZf += 1;
    }
    return lsNAVr;
  },
  _unescape: function (str) {
    for (luOJDw.SuSQwW = 32; luOJDw.SuSQwW < 128; luOJDw.SuSQwW++) {
      str = str.replace(new RegExp("\\\\x" + luOJDw.SuSQwW.toString(16), "ig"), String.fromCharCode(luOJDw.SuSQwW));
    }
    str = str.replace(new RegExp("\\\\x09", "g"), "\t");
    return str;
  },
  run_tests: function (sanity_test) {
    dcdG1OW.cPqXmO = sanity_test || new SanityTest();
    dcdG1OW.cPqXmO.test_function(JavascriptObfuscator._smart_split, "JavascriptObfuscator._smart_split");
    cPqXmO.expect("", []);
    cPqXmO.expect("\"a\", \"b\"", ["\"a\"", "\"b\""]);
    cPqXmO.expect("\"aaa\",\"bbbb\"", ["\"aaa\"", "\"bbbb\""]);
    cPqXmO.expect("\"a\", \"b\\\"\"", ["\"a\"", "\"b\\\"\""]);
    cPqXmO.test_function(JavascriptObfuscator._unescape, "JavascriptObfuscator._unescape");
    cPqXmO.expect("\\x40", "@");
    cPqXmO.expect("\\x10", "\\x10");
    cPqXmO.expect("\\x1", "\\x1");
    cPqXmO.expect("\\x61\\x62\\x22\\x63\\x64", "ab\"cd");
    cPqXmO.test_function(JavascriptObfuscator.detect, "JavascriptObfuscator.detect");
    cPqXmO.expect("", false);
    cPqXmO.expect("abcd", -439 != -119);
    cPqXmO.expect("var _0xaaaa", -439 == 188);
    cPqXmO.expect("var _0xaaaa = [\"a\", \"b\"]", true);
    cPqXmO.expect("var _0xaaaa=[\"a\", \"b\"]", -439 != 98);
    cPqXmO.expect("var _0x1234=[\"a\",\"b\"]", true);
    return cPqXmO;
  }
};