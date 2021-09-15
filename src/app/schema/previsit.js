import { PrevisitTC } from '../model'

import {
  generateQueries,
  generateMutations,
} from '../../utils/generateResolvers'

const FamilyQueries = {
  familyPrevisit: PrevisitTC.mongooseResolvers.findOne(),
  familyPrevisitById: PrevisitTC.mongooseResolvers.findById(),
}

const Queries = generateQueries({ name: 'previsit', typeComposer: PrevisitTC })

const FamilyMutations = {
  previsitUpdateOneByFamily: PrevisitTC.mongooseResolvers.updateOne(),
}

const Mutations = generateMutations({
  name: 'previsit',
  typeComposer: PrevisitTC,
})

const PrevisitQuery = {
  // Family queries
  ...FamilyQueries,

  // General queries
  ...Queries,
}

const PrevisitMutation = {
  // Family resolvers
  ...FamilyMutations,

  // General resolvers
  ...Mutations,

  // Custom resolvers
}

export { PrevisitQuery, PrevisitMutation }
