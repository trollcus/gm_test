import mongoose, { Schema, Types } from 'mongoose'
import dotenv from 'dotenv'

import MongoMemoryServer from 'mongodb-memory-server-core'

dotenv.config()
;(async () => {
  const mongod = await MongoMemoryServer.create()

  const uri = mongod.getUri()

  const connection = mongoose.connect(uri, {
    autoIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  mongoose.connection.once('open', () => {
    console.log(`MongoDB successfully connected`)
  })
})()

export { mongoose, Schema, Types }
