// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Ava = require("rescript-ava/src/ava.cjs");
var Json = require("./json.cjs");
var Parser = require("../../src/parser.cjs");

function run(param) {
  return Parser.run(Json.json, param);
}

Ava.test("[JSON] String succeeds", (function (t) {
        var msg = Parser.run(Json.json, "\"1\"");
        if (msg.TAG === /* Ok */0) {
          var match = msg._0;
          var match$1 = match[0];
          if (typeof match$1 === "number" || !(match$1.TAG === /* String */1 && match$1._0 === "1" && match[1] === "")) {
            Ava.fail(t, "Should not succeed", undefined);
          } else {
            Ava.pass(t, undefined, undefined);
          }
        } else {
          Ava.fail(t, "Should not fail with \"" + msg._0 + "\"", undefined);
        }
        var msg$1 = Parser.run(Json.json, "\"hello\"");
        if (msg$1.TAG === /* Ok */0) {
          var match$2 = msg$1._0;
          var match$3 = match$2[0];
          if (typeof match$3 === "number" || !(match$3.TAG === /* String */1 && match$3._0 === "hello" && match$2[1] === "")) {
            Ava.fail(t, "Should not succeed", undefined);
          } else {
            Ava.pass(t, undefined, undefined);
          }
        } else {
          Ava.fail(t, "Should not fail with \"" + msg$1._0 + "\"", undefined);
        }
        var msg$2 = Parser.run(Json.json, "\"   \"");
        if (msg$2.TAG === /* Ok */0) {
          var match$4 = msg$2._0;
          var match$5 = match$4[0];
          if (typeof match$5 === "number" || !(match$5.TAG === /* String */1 && match$5._0 === "   " && match$4[1] === "")) {
            Ava.fail(t, "Should not succeed", undefined);
          } else {
            Ava.pass(t, undefined, undefined);
          }
        } else {
          Ava.fail(t, "Should not fail with \"" + msg$2._0 + "\"", undefined);
        }
        var msg$3 = Parser.run(Json.json, "\"\"");
        if (msg$3.TAG === /* Ok */0) {
          var match$6 = msg$3._0;
          var match$7 = match$6[0];
          if (typeof match$7 === "number" || !(match$7.TAG === /* String */1 && match$7._0 === "" && match$6[1] === "")) {
            Ava.fail(t, "Should not succeed", undefined);
          } else {
            Ava.pass(t, undefined, undefined);
          }
        } else {
          Ava.fail(t, "Should not fail with \"" + msg$3._0 + "\"", undefined);
        }
        var msg$4 = Parser.run(Json.json, "\"\u0050\"");
        if (msg$4.TAG === /* Ok */0) {
          var match$8 = msg$4._0;
          var match$9 = match$8[0];
          if (typeof match$9 === "number" || !(match$9.TAG === /* String */1 && match$9._0 === "P" && match$8[1] === "")) {
            Ava.fail(t, "Should not succeed", undefined);
          } else {
            Ava.pass(t, undefined, undefined);
          }
        } else {
          Ava.fail(t, "Should not fail with \"" + msg$4._0 + "\"", undefined);
        }
        var msg$5 = Parser.run(Json.json, "\"\u0050\u0069\u0061n\u006F\"");
        if (msg$5.TAG !== /* Ok */0) {
          return Ava.fail(t, "Should not fail with \"" + msg$5._0 + "\"", undefined);
        }
        var match$10 = msg$5._0;
        var match$11 = match$10[0];
        if (typeof match$11 === "number" || !(match$11.TAG === /* String */1 && match$11._0 === "Piano" && match$10[1] === "")) {
          return Ava.fail(t, "Should not succeed", undefined);
        } else {
          return Ava.pass(t, undefined, undefined);
        }
      }));

var P;

exports.P = P;
exports.run = run;
/*  Not a pure module */
