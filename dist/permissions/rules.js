"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAuthenticated = exports.isAuthenticatedFamilyOrAdmin = void 0;

var _graphqlShield = require("graphql-shield");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var isDevMode = (0, _graphqlShield.rule)()( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", process.env.NODE_ENV === 'development' ? true : false);

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
var isAuthenticatedFamilyOrAdmin = (0, _graphqlShield.or)(isDevMode);
exports.isAuthenticatedFamilyOrAdmin = isAuthenticatedFamilyOrAdmin;
var isAuthenticated = (0, _graphqlShield.or)(isDevMode);
exports.isAuthenticated = isAuthenticated;