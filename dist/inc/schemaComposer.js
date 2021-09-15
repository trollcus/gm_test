"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schemaComposer = void 0;

var _graphqlCompose = require("graphql-compose");

// Creating own SchemaComposer instance, because in
// one node process we are using several graphql schemas.
var schemaComposer = new _graphqlCompose.SchemaComposer();
exports.schemaComposer = schemaComposer;