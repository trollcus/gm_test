"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateMutations = exports.generateQueries = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generateQueries = function generateQueries(_ref) {
  var _ref2;

  var name = _ref.name,
      typeComposer = _ref.typeComposer;
  return _ref2 = {}, _defineProperty(_ref2, "".concat(name, "ById"), typeComposer.mongooseResolvers.findById()), _defineProperty(_ref2, "".concat(name, "ByIds"), typeComposer.mongooseResolvers.findByIds()), _defineProperty(_ref2, "".concat(name, "One"), typeComposer.mongooseResolvers.findOne()), _defineProperty(_ref2, "".concat(name, "Many"), typeComposer.mongooseResolvers.findMany()), _defineProperty(_ref2, "".concat(name, "DataLoader"), typeComposer.mongooseResolvers.dataLoader()), _defineProperty(_ref2, "".concat(name, "DataLoaderMany"), typeComposer.mongooseResolvers.dataLoaderMany()), _defineProperty(_ref2, "".concat(name, "ByIdLean"), typeComposer.mongooseResolvers.findById({
    lean: true
  })), _defineProperty(_ref2, "".concat(name, "ByIdsLean"), typeComposer.mongooseResolvers.findByIds({
    lean: true
  })), _defineProperty(_ref2, "".concat(name, "OneLean"), typeComposer.mongooseResolvers.findOne({
    lean: true
  })), _defineProperty(_ref2, "".concat(name, "ManyLean"), typeComposer.mongooseResolvers.findMany({
    lean: true
  })), _defineProperty(_ref2, "".concat(name, "DataLoaderLean"), typeComposer.mongooseResolvers.dataLoader({
    lean: true
  })), _defineProperty(_ref2, "".concat(name, "DataLoaderManyLean"), typeComposer.mongooseResolvers.dataLoaderMany({
    lean: true
  })), _defineProperty(_ref2, "".concat(name, "Count"), typeComposer.mongooseResolvers.count()), _defineProperty(_ref2, "".concat(name, "Connection"), typeComposer.mongooseResolvers.connection()), _defineProperty(_ref2, "".concat(name, "Pagination"), typeComposer.mongooseResolvers.pagination()), _ref2;
};

exports.generateQueries = generateQueries;

var generateMutations = function generateMutations(_ref3) {
  var _ref4;

  var name = _ref3.name,
      typeComposer = _ref3.typeComposer;
  return _ref4 = {}, _defineProperty(_ref4, "".concat(name, "CreateOne"), typeComposer.mongooseResolvers.createOne()), _defineProperty(_ref4, "".concat(name, "CreateMany"), typeComposer.mongooseResolvers.createMany()), _defineProperty(_ref4, "".concat(name, "UpdateById"), typeComposer.mongooseResolvers.updateById()), _defineProperty(_ref4, "".concat(name, "UpdateOne"), typeComposer.mongooseResolvers.updateOne()), _defineProperty(_ref4, "".concat(name, "UpdateMany"), typeComposer.mongooseResolvers.updateMany()), _defineProperty(_ref4, "".concat(name, "RemoveById"), typeComposer.mongooseResolvers.removeById()), _defineProperty(_ref4, "".concat(name, "RemoveOne"), typeComposer.mongooseResolvers.removeOne()), _defineProperty(_ref4, "".concat(name, "RemoveMany"), typeComposer.mongooseResolvers.removeMany()), _ref4;
};

exports.generateMutations = generateMutations;