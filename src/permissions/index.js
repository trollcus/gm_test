import { shield } from 'graphql-shield'
import * as rules from './rules'

export const permissions = shield(
  {
    Query: {
      '*': rules.isAuthenticated,
      //   previsitById: rules.isAuthenticated,
      //   previsitOne: rules.isAuthenticated,

      // Previsit family queries
      familyPrevisit: rules.isAuthenticatedFamilyOrAdmin,
      familyPrevisitById: rules.isAuthenticatedFamilyOrAdmin,
    },
    Mutation: {
      '*': rules.isAuthenticated,
      // previsitUpdateOneByFamily: rules.isPrevisitFamily,

      // Previsit family mutations
      previsitUpdateOneByFamily: rules.isAuthenticatedFamilyOrAdmin,
    },
    Previsit: {
      project_id: rules.isAuthenticated, // Auth on field level
    },
    // User: { _id: rules.isAdmin, access: rules.isAdmin }, // add
  },
  { debug: process.env.NODE_ENV === 'development' ? true : false }
)
