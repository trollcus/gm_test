"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectTC = exports.Project = exports.ProjectSchema = void 0;

var _db = require("../../inc/db");

var _graphqlComposeMongoose = require("graphql-compose-mongoose");

var _mongooseTimestamp = _interopRequireDefault(require("mongoose-timestamp"));

var _schemaComposer = require("../../inc/schemaComposer");

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import mongoose, { Schema } from 'mongoose'
var ProjectSchema = new _db.Schema({
  name: {
    type: String,
    text: true,
    index: true,
    trim: true
  }
});
exports.ProjectSchema = ProjectSchema;
ProjectSchema.plugin(_mongooseTimestamp["default"], {
  createdAt: 'create_date',
  updatedAt: 'update_date'
});
ProjectSchema.index({
  create_date: 1
});
ProjectSchema.index({
  update_date: 1
});

var Project = _db.mongoose.model('Project', ProjectSchema);

exports.Project = Project;
var ProjectTC = (0, _graphqlComposeMongoose.composeMongoose)(Project);
exports.ProjectTC = ProjectTC;