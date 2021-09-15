"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrevisitTC = exports.Previsit = exports.PrevisitSchema = void 0;

var _db = require("../../inc/db");

var _graphqlComposeMongoose = require("graphql-compose-mongoose");

var _mongooseTimestamp = _interopRequireDefault(require("mongoose-timestamp"));

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import mongoose, { Schema } from 'mongoose'
var PrevisitSchema = new _db.Schema({
  project_id: {
    type: _db.Schema.Types.ObjectId,
    required: true
  },
  email: {
    type: String,
    required: true,
    text: true
  }
}, {
  collection: 'previsits'
});
exports.PrevisitSchema = PrevisitSchema;
PrevisitSchema.plugin(_mongooseTimestamp["default"], {
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});
PrevisitSchema.index({
  created_at: 1
});
PrevisitSchema.index({
  created_at: 1,
  email: 1
});
PrevisitSchema.index({
  updated_at: 1
});
PrevisitSchema.index({
  updated_at: 1,
  email: 1
});
PrevisitSchema.index({
  project_id: 1
});

var Previsit = _db.mongoose.model('Previsit', PrevisitSchema);

exports.Previsit = Previsit;
var PrevisitTC = (0, _graphqlComposeMongoose.composeMongoose)(Previsit); // PrevisitTC.addRelation('project', {
//   resolver: () => ProjectTC.mongooseResolvers.dataLoader({ lean: true }),
//   prepareArgs: {
//     _id: source => source.project_id || null,
//   },
//   projection: { project_id: 1, email:  },
// })

exports.PrevisitTC = PrevisitTC;
PrevisitTC.addRelation('project', {
  resolver: function resolver() {
    return _.ProjectTC.mongooseResolvers.dataLoader({
      lean: true
    });
  },
  // resolver: () => ProjectTC.mongooseResolvers.dataLoader({ lean: true }),
  prepareArgs: {
    _id: function _id(source) {
      console.log(source);
      return source.project_id || null;
    }
  },
  projection: {
    email: true
  }
});