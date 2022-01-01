// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Parser = require("../../src/parser.cjs");
var Belt_Option = require("rescript/lib/js/belt_Option.js");

function charToString(c) {
  return String.fromCharCode(c);
}

function charListToString(chars) {
  if (chars) {
    return chars.hd + charListToString(chars.tl);
  } else {
    return "";
  }
}

var digit = Parser.map(Parser.satisfy(function (c) {
          if (c >= /* '0' */48) {
            return /* '9' */57 >= c;
          } else {
            return false;
          }
        }), charToString);

var digits = Parser.map(Parser.atLeastOne(digit), charListToString);

var sign = Parser.anyOf([
      /* '+' */43,
      /* '-' */45
    ]);

var fraction = Parser.map(Parser.andThen(Parser.$$char(/* '.' */46), digits), (function (param) {
        return String.fromCharCode(param[0]) + param[1];
      }));

function toString(param) {
  var match = param[0];
  return String.fromCharCode(match[0]) + Belt_Option.getWithDefault(Belt_Option.map(match[1], charToString), "") + param[1];
}

var exponent = Parser.choice([
      Parser.map(Parser.andThen(Parser.andThen(Parser.$$char(/* 'e' */101), Parser.optional(sign)), digits), toString),
      Parser.map(Parser.andThen(Parser.andThen(Parser.$$char(/* 'E' */69), Parser.optional(sign)), digits), toString)
    ]);

var $$Option;

var P;

var integer = "";

exports.$$Option = $$Option;
exports.P = P;
exports.charToString = charToString;
exports.charListToString = charListToString;
exports.digit = digit;
exports.digits = digits;
exports.sign = sign;
exports.integer = integer;
exports.fraction = fraction;
exports.exponent = exponent;
/* digit Not a pure module */
