export const generateQueries = ({ name, typeComposer }) => ({
  [`${name}ById`]: typeComposer.mongooseResolvers.findById(),
  [`${name}ByIds`]: typeComposer.mongooseResolvers.findByIds(),
  [`${name}One`]: typeComposer.mongooseResolvers.findOne(),
  [`${name}Many`]: typeComposer.mongooseResolvers.findMany(),
  [`${name}DataLoader`]: typeComposer.mongooseResolvers.dataLoader(),
  [`${name}DataLoaderMany`]: typeComposer.mongooseResolvers.dataLoaderMany(),
  [`${name}ByIdLean`]: typeComposer.mongooseResolvers.findById({
    lean: true,
  }),
  [`${name}ByIdsLean`]: typeComposer.mongooseResolvers.findByIds({
    lean: true,
  }),
  [`${name}OneLean`]: typeComposer.mongooseResolvers.findOne({
    lean: true,
  }),
  [`${name}ManyLean`]: typeComposer.mongooseResolvers.findMany({
    lean: true,
  }),
  [`${name}DataLoaderLean`]: typeComposer.mongooseResolvers.dataLoader({
    lean: true,
  }),
  [`${name}DataLoaderManyLean`]: typeComposer.mongooseResolvers.dataLoaderMany({
    lean: true,
  }),
  [`${name}Count`]: typeComposer.mongooseResolvers.count(),
  [`${name}Connection`]: typeComposer.mongooseResolvers.connection(),
  [`${name}Pagination`]: typeComposer.mongooseResolvers.pagination(),
})

export const generateMutations = ({ name, typeComposer }) => ({
  [`${name}CreateOne`]: typeComposer.mongooseResolvers.createOne(),
  [`${name}CreateMany`]: typeComposer.mongooseResolvers.createMany(),
  [`${name}UpdateById`]: typeComposer.mongooseResolvers.updateById(),
  [`${name}UpdateOne`]: typeComposer.mongooseResolvers.updateOne(),
  [`${name}UpdateMany`]: typeComposer.mongooseResolvers.updateMany(),
  [`${name}RemoveById`]: typeComposer.mongooseResolvers.removeById(),
  [`${name}RemoveOne`]: typeComposer.mongooseResolvers.removeOne(),
  [`${name}RemoveMany`]: typeComposer.mongooseResolvers.removeMany(),
})
