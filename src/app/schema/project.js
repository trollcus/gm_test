import { ProjectTC } from '../model/project'

const ProjectQuery = {
  projectById: ProjectTC.mongooseResolvers.findById(),
  projectByIds: ProjectTC.mongooseResolvers.findByIds(),
  projectOne: ProjectTC.mongooseResolvers.findOne(),
  projectMany: ProjectTC.mongooseResolvers.findMany(),
  projectDataLoader: ProjectTC.mongooseResolvers.dataLoader(),
  projectDataLoaderMany: ProjectTC.mongooseResolvers.dataLoaderMany(),
  projectByIdLean: ProjectTC.mongooseResolvers.findById({ lean: true }),
  projectByIdsLean: ProjectTC.mongooseResolvers.findByIds({ lean: true }),
  projectOneLean: ProjectTC.mongooseResolvers.findOne({ lean: true }),
  projectManyLean: ProjectTC.mongooseResolvers.findMany({ lean: true }),
  projectDataLoaderLean: ProjectTC.mongooseResolvers.dataLoader({
    lean: true,
  }),
  projectDataLoaderManyLean: ProjectTC.mongooseResolvers.dataLoaderMany({
    lean: true,
  }),
  projectCount: ProjectTC.mongooseResolvers.count(),
  projectConnection: ProjectTC.mongooseResolvers.connection(),
  projectPagination: ProjectTC.mongooseResolvers.pagination(),
}

const ProjectMutation = {
  projectCreateOne: ProjectTC.mongooseResolvers.createOne(),
  projectCreateMany: ProjectTC.mongooseResolvers.createMany(),
  projectUpdateById: ProjectTC.mongooseResolvers.updateById(),
  projectUpdateOne: ProjectTC.mongooseResolvers.updateOne(),
  projectUpdateMany: ProjectTC.mongooseResolvers.updateMany(),
  projectRemoveById: ProjectTC.mongooseResolvers.removeById(),
  projectRemoveOne: ProjectTC.mongooseResolvers.removeOne(),
  projectRemoveMany: ProjectTC.mongooseResolvers.removeMany(),
}

export { ProjectQuery, ProjectMutation }
