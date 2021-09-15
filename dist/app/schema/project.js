"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectMutation = exports.ProjectQuery = void 0;

var _project = require("../model/project");

var ProjectQuery = {
  projectById: _project.ProjectTC.mongooseResolvers.findById(),
  projectByIds: _project.ProjectTC.mongooseResolvers.findByIds(),
  projectOne: _project.ProjectTC.mongooseResolvers.findOne(),
  projectMany: _project.ProjectTC.mongooseResolvers.findMany(),
  projectDataLoader: _project.ProjectTC.mongooseResolvers.dataLoader(),
  projectDataLoaderMany: _project.ProjectTC.mongooseResolvers.dataLoaderMany(),
  projectByIdLean: _project.ProjectTC.mongooseResolvers.findById({
    lean: true
  }),
  projectByIdsLean: _project.ProjectTC.mongooseResolvers.findByIds({
    lean: true
  }),
  projectOneLean: _project.ProjectTC.mongooseResolvers.findOne({
    lean: true
  }),
  projectManyLean: _project.ProjectTC.mongooseResolvers.findMany({
    lean: true
  }),
  projectDataLoaderLean: _project.ProjectTC.mongooseResolvers.dataLoader({
    lean: true
  }),
  projectDataLoaderManyLean: _project.ProjectTC.mongooseResolvers.dataLoaderMany({
    lean: true
  }),
  projectCount: _project.ProjectTC.mongooseResolvers.count(),
  projectConnection: _project.ProjectTC.mongooseResolvers.connection(),
  projectPagination: _project.ProjectTC.mongooseResolvers.pagination()
};
exports.ProjectQuery = ProjectQuery;
var ProjectMutation = {
  projectCreateOne: _project.ProjectTC.mongooseResolvers.createOne(),
  projectCreateMany: _project.ProjectTC.mongooseResolvers.createMany(),
  projectUpdateById: _project.ProjectTC.mongooseResolvers.updateById(),
  projectUpdateOne: _project.ProjectTC.mongooseResolvers.updateOne(),
  projectUpdateMany: _project.ProjectTC.mongooseResolvers.updateMany(),
  projectRemoveById: _project.ProjectTC.mongooseResolvers.removeById(),
  projectRemoveOne: _project.ProjectTC.mongooseResolvers.removeOne(),
  projectRemoveMany: _project.ProjectTC.mongooseResolvers.removeMany()
};
exports.ProjectMutation = ProjectMutation;