"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.permissions = void 0;

var _graphqlShield = require("graphql-shield");

var rules = _interopRequireWildcard(require("./rules"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var permissions = (0, _graphqlShield.shield)({
  Query: {
    '*': rules.isAuthenticated,
    //   previsitById: rules.isAuthenticated,
    //   previsitOne: rules.isAuthenticated,
    // Previsit family queries
    familyPrevisit: rules.isAuthenticatedFamilyOrAdmin,
    familyPrevisitById: rules.isAuthenticatedFamilyOrAdmin
  },
  Mutation: {
    '*': rules.isAuthenticated,
    // previsitUpdateOneByFamily: rules.isPrevisitFamily,
    // Previsit family mutations
    previsitUpdateOneByFamily: rules.isAuthenticatedFamilyOrAdmin
  },
  Previsit: {
    project_id: rules.isAuthenticated // Auth on field level

  } // User: { _id: rules.isAdmin, access: rules.isAdmin }, // add

}, {
  debug: process.env.NODE_ENV === 'development' ? true : false
});
exports.permissions = permissions;