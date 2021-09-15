import 'regenerator-runtime/runtime'
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import jwtExpress from 'express-jwt'
import { ApolloServer } from 'apollo-server-express'
import { applyMiddleware } from 'graphql-middleware'

import initiateWebsocketServer from './inc/websockets'

import './inc/db'
import schema from './app/schema'
import { permissions } from './permissions'

dotenv.config()

const app = express(),
  isDevMode = process.env.NODE_ENV === 'development' ? true : false

mongoose.set('debug', isDevMode)
;(async () => {
  const apolloServer = new ApolloServer({
    schema: applyMiddleware(schema, permissions),
    cors: true,
    introspection: true,
    tracing: true,
    context: async ({ req }) => {
      const user = null
      // const user = await getUser(req.user)

      return Promise.resolve({ req, ...(user ? { user } : {}) })
    },
  })

  await apolloServer.start()

  // if (!process.env.NODE_ENV || process.env.NODE_ENV !== 'development')
  app.use(
    jwtExpress({
      secret: process.env.JWT_SECRET,
      algorithms: ['HS256'],
      credentialsRequired: isDevMode ? false : true,
    })
  )

  apolloServer.applyMiddleware({
    app,
    path: '/',
    cors: true,
    onHealthCheck: () =>
      // eslint-disable-next-line no-undef
      new Promise((resolve, reject) => {
        if (mongoose.connection.readyState > 0) {
          resolve()
        } else {
          reject()
        }
      }),
  })

  const server = app.listen(
    { port: process.env.PORT ? process.env.PORT : 3000 },
    () => {
      initiateWebsocketServer(server)

      console.log(
        `🚀 Server listening on port ${
          process.env.PORT ? process.env.PORT : 3000
        }`
      )

      console.log(
        `📶 Websocket is hosted on ws://${process.env.HOST}:${
          process.env.PORT ? process.env.PORT : 3000
        }`
      )

      console.log(
        `😷 Health checks available at ${process.env.HEALTH_ENDPOINT}`
      )
    }
  )
})()
