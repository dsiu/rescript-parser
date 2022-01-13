// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Fs = require("fs");
var Ava = require("rescript-ava/src/ava.cjs");
var Json = require("./parser/json.cjs");
var Belt_Array = require("rescript/lib/js/belt_Array.js");
var Res_parser = require("../../src/res_parser.cjs");

function run(param) {
  return Res_parser.run(Json.parse, param);
}

function readFiles(dirname) {
  return Belt_Array.map(Belt_Array.map(Fs.readdirSync("test/json/inputs/" + dirname), (function (name) {
                    return [
                            name,
                            "test/json/inputs/" + dirname + "/" + name
                          ];
                  })), (function (param) {
                return [
                        param[0],
                        Fs.readFileSync(param[1], "utf8")
                      ];
              }));
}

var passes = readFiles("passes");

var failures = readFiles("failures");

var partials = readFiles("partials");

Belt_Array.forEach(passes, (function (param) {
        var file = param[1];
        return Ava.test("[JSON] File \"" + param[0] + "\" success", (function (t) {
                      var msg = Res_parser.run(Json.parse, file);
                      if (msg.TAG !== /* Ok */0) {
                        return Ava.fail(t, "Shouldn't fail with \"" + msg._0 + "\"", undefined);
                      }
                      var rest = msg._0[1];
                      if (rest === "") {
                        return Ava.pass(t, "Should succeed", undefined);
                      } else {
                        return Ava.fail(t, "Shouldn't partially succeed with \"" + rest + "\" remaining", undefined);
                      }
                    }));
      }));

Belt_Array.forEach(partials, (function (param) {
        var file = param[1];
        return Ava.test("[JSON] File \"" + param[0] + "\" partial success", (function (t) {
                      var msg = Res_parser.run(Json.parse, file);
                      if (msg.TAG !== /* Ok */0) {
                        return Ava.fail(t, "Shouldn't fail with \"" + msg._0 + "\"", undefined);
                      }
                      var rest = msg._0[1];
                      if (rest === "") {
                        return Ava.fail(t, "Shouldn't succeed", undefined);
                      } else {
                        return Ava.pass(t, "Should partially succeed with \"" + rest + "\" remaining", undefined);
                      }
                    }));
      }));

Belt_Array.forEach(failures, (function (param) {
        var file = param[1];
        return Ava.test("[JSON] File \"" + param[0] + "\" failure", (function (t) {
                      var msg = Res_parser.run(Json.parse, file);
                      if (msg.TAG !== /* Ok */0) {
                        return Ava.pass(t, "Should fail with \"" + msg._0 + "\"", undefined);
                      }
                      var match = msg._0;
                      return Ava.fail(t, "Shouldn't succeed with \"" + Json.toString(match[0]) + "\" and \"" + match[1] + "\" remaining", undefined);
                    }));
      }));

var P;

var map = Belt_Array.map;

var forEach = Belt_Array.forEach;

exports.P = P;
exports.run = run;
exports.map = map;
exports.forEach = forEach;
exports.readFiles = readFiles;
exports.passes = passes;
exports.failures = failures;
exports.partials = partials;
/* passes Not a pure module */
