"use strict";

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _path = _interopRequireDefault(require("path"));

var _graphql = require("graphql");

var _utilities = require("graphql/utilities");

var _schema = _interopRequireDefault(require("../schema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function buildSchema() {
  return _buildSchema.apply(this, arguments);
}

function _buildSchema() {
  _buildSchema = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _fsExtra["default"].ensureFile('../data/schema.graphql.json');

          case 2:
            _context.next = 4;
            return _fsExtra["default"].ensureFile('../data/schema.graphql');

          case 4:
            _context.t0 = _fsExtra["default"];
            _context.t1 = _path["default"].join(__dirname, '../data/schema.graphql.json');
            _context.t2 = JSON;
            _context.next = 9;
            return (0, _graphql.graphql)(_schema["default"], _utilities.introspectionQuery);

          case 9:
            _context.t3 = _context.sent;
            _context.t4 = _context.t2.stringify.call(_context.t2, _context.t3, null, 2);

            _context.t0.writeFileSync.call(_context.t0, _context.t1, _context.t4);

            _fsExtra["default"].writeFileSync(_path["default"].join(__dirname, '../data/schema.graphql.txt'), (0, _utilities.printSchema)(_schema["default"]));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _buildSchema.apply(this, arguments);
}

function run() {
  return _run.apply(this, arguments);
}

function _run() {
  _run = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return buildSchema();

          case 2:
            console.log('Schema build complete!');

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _run.apply(this, arguments);
}

run()["catch"](function (e) {
  console.log(e);
  process.exit(0);
});