import { rule, or } from 'graphql-shield'

const isDevMode = rule()(async () => {
  return process.env.NODE_ENV === 'development' ? true : false
})

export const isAuthenticatedFamilyOrAdmin = or(
  isDevMode
)

export const isAuthenticated = or(isDevMode)
