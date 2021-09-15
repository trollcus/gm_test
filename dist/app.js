"use strict";

require("regenerator-runtime/runtime");

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _expressJwt = _interopRequireDefault(require("express-jwt"));

var _apolloServerExpress = require("apollo-server-express");

var _graphqlMiddleware = require("graphql-middleware");

var _websockets = _interopRequireDefault(require("./inc/websockets"));

require("./inc/db");

var _schema = _interopRequireDefault(require("./app/schema"));

var _permissions = require("./permissions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv["default"].config();

var app = (0, _express["default"])(),
    isDevMode = process.env.NODE_ENV === 'development' ? true : false;

_mongoose["default"].set('debug', isDevMode);

_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
  var apolloServer, server;
  return regeneratorRuntime.wrap(function _callee2$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          apolloServer = new _apolloServerExpress.ApolloServer({
            schema: (0, _graphqlMiddleware.applyMiddleware)(_schema["default"], _permissions.permissions),
            cors: true,
            introspection: true,
            tracing: true,
            context: function () {
              var _context = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
                var req, user;
                return regeneratorRuntime.wrap(function _callee$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        req = _ref2.req;
                        user = null; // const user = await getUser(req.user)

                        return _context2.abrupt("return", Promise.resolve(_objectSpread({
                          req: req
                        }, user ? {
                          user: user
                        } : {})));

                      case 3:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee);
              }));

              function context(_x) {
                return _context.apply(this, arguments);
              }

              return context;
            }()
          });
          _context3.next = 3;
          return apolloServer.start();

        case 3:
          // if (!process.env.NODE_ENV || process.env.NODE_ENV !== 'development')
          app.use((0, _expressJwt["default"])({
            secret: process.env.JWT_SECRET,
            algorithms: ['HS256'],
            credentialsRequired: isDevMode ? false : true
          }));
          apolloServer.applyMiddleware({
            app: app,
            path: '/',
            cors: true,
            onHealthCheck: function onHealthCheck() {
              return (// eslint-disable-next-line no-undef
                new Promise(function (resolve, reject) {
                  if (_mongoose["default"].connection.readyState > 0) {
                    resolve();
                  } else {
                    reject();
                  }
                })
              );
            }
          });
          server = app.listen({
            port: process.env.PORT ? process.env.PORT : 3000
          }, function () {
            (0, _websockets["default"])(server);
            console.log("\uD83D\uDE80 Server listening on port ".concat(process.env.PORT ? process.env.PORT : 3000));
            console.log("\uD83D\uDCF6 Websocket is hosted on ws://".concat(process.env.HOST, ":").concat(process.env.PORT ? process.env.PORT : 3000));
            console.log("\uD83D\uDE37 Health checks available at ".concat(process.env.HEALTH_ENDPOINT));
          });

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee2);
}))();