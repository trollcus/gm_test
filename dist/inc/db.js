"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "mongoose", {
  enumerable: true,
  get: function get() {
    return _mongoose["default"];
  }
});
Object.defineProperty(exports, "Schema", {
  enumerable: true,
  get: function get() {
    return _mongoose.Schema;
  }
});
Object.defineProperty(exports, "Types", {
  enumerable: true,
  get: function get() {
    return _mongoose.Types;
  }
});

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _mongodbMemoryServerCore = _interopRequireDefault(require("mongodb-memory-server-core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv["default"].config();

_mongoose["default"].createConnection = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var mongoServer, mongoUri, connection;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _mongodbMemoryServerCore["default"].create();

        case 2:
          mongoServer = _context.sent;
          mongoUri = mongoServer.getUri();
          console.log("mongoUri", mongoUri);
          connection = _mongoose["default"].connect(mongoUri, {
            autoIndex: true,
            // reconnectTries: Number.MAX_VALUE,
            // reconnectInterval: 500,
            // poolSize: 50,
            // bufferMaxEntries: 0,
            // keepAlive: 120,
            useNewUrlParser: true,
            useUnifiedTopology: true
          }); // originalConnect.bind(mongoose)(mongoUri, { useMongoClient: true }); // mongoose 4
          // originalConnect.bind(mongoose)(
          //   mongoUri,
          //   {
          //     useNewUrlParser: true,
          //     useUnifiedTopology: true,
          //   } /* for tests compatibility with mongoose v5 & v6 */
          // ) // mongoose 5

          originalConnect.bind(_mongoose["default"])(mongoUri, {}); // mongoose 6

          _mongoose["default"].connection.on('error', function (e) {
            if (e.message.code === 'ETIMEDOUT') {
              console.error(e);
            } else {
              throw e;
            }
          });

          _mongoose["default"].connection.once('open', function () {
            console.log("MongoDB successfully connected to ".concat(mongoUri));
          });

          _mongoose["default"].connection.once('disconnected', function () {
            console.log('MongoDB disconnected!');
            mongoServer.stop();
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
_mongoose["default"].connect = _mongoose["default"].createConnection; // const connection = mongoose.connect(process.env.MONGODB_URI, {
//   autoIndex: true,
//   // reconnectTries: Number.MAX_VALUE,
//   // reconnectInterval: 500,
//   // poolSize: 50,
//   // bufferMaxEntries: 0,
//   // keepAlive: 120,
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// // mongoose.set('useCreateIndex', true)
// mongoose.connection.once('open', () => {
//   console.log(`MongoDB successfully connected`)
// })
// // connection
// //   .then(db => db)
// //   .catch(err => {
// //     console.log(err)
// //   })
// mongoose.connection.on('error', e => {
//   if (e.message.code === 'ETIMEDOUT') {
//     console.error(e)
//   } else {
//     throw e
//   }
// })
// export default connection