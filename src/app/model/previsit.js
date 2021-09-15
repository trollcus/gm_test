import mongoose, { Schema } from 'mongoose'
import { composeMongoose } from 'graphql-compose-mongoose'
import timestamps from 'mongoose-timestamp'

import { ProjectTC } from './'

export const PrevisitSchema = new Schema(
  {
    project_id: { type: Schema.Types.ObjectId, required: true },

    email: { type: String, required: true, text: true },
  },
  {
    collection: 'previsits',
  }
)

PrevisitSchema.plugin(timestamps, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})

PrevisitSchema.index({ created_at: 1 })
PrevisitSchema.index({ created_at: 1, email: 1 })
PrevisitSchema.index({ updated_at: 1 })
PrevisitSchema.index({ updated_at: 1, email: 1 })
PrevisitSchema.index({ project_id: 1 })

export const Previsit = mongoose.model('Previsit', PrevisitSchema)
export const PrevisitTC = composeMongoose(Previsit)

// PrevisitTC.addRelation('project', {
//   resolver: () => ProjectTC.mongooseResolvers.dataLoader({ lean: true }),
//   prepareArgs: {
//     _id: source => source.project_id || null,
//   },
//   projection: { project_id: 1, email:  },
// })

PrevisitTC.addRelation('project', {
  resolver: () => ProjectTC.mongooseResolvers.dataLoader({ lean: true }),
  // resolver: () => ProjectTC.mongooseResolvers.dataLoader({ lean: true }),
  prepareArgs: {
    _id: source => {
      console.log(source)
      return source.project_id || null
    },
  },
  projection: { project_id: true },
})
