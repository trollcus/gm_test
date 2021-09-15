"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ws = _interopRequireDefault(require("ws"));

var _ws2 = require("graphql-ws/lib/use/ws");

var _schema = _interopRequireDefault(require("../app/schema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initiateWebsocketServer = function initiateWebsocketServer(server) {
  var wsServer = new _ws["default"].Server({
    server: server
  });
  (0, _ws2.useServer)({
    schema: _schema["default"],
    onConnect: function onConnect(ctx) {
      console.log('Connect', ctx);
    },
    onSubscribe: function onSubscribe(ctx, msg) {
      console.log('Subscribe', {
        ctx: ctx,
        msg: msg
      });
    },
    onNext: function onNext(ctx, msg, args, result) {
      console.debug('Next', {
        ctx: ctx,
        msg: msg,
        args: args,
        result: result
      });
    },
    onError: function onError(ctx, msg, errors) {
      console.error('Error', {
        ctx: ctx,
        msg: msg,
        errors: errors
      });
    },
    onComplete: function onComplete(ctx, msg) {
      console.log('Complete', {
        ctx: ctx,
        msg: msg
      });
    }
  }, wsServer);
};

var _default = initiateWebsocketServer;
exports["default"] = _default;