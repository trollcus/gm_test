import mongoose, { Schema } from 'mongoose'
import { composeMongoose } from 'graphql-compose-mongoose'
import timestamps from 'mongoose-timestamp'

export const ProjectSchema = new Schema({
  name: { type: String, text: true, index: true, trim: true },
})

ProjectSchema.plugin(timestamps, {
  createdAt: 'create_date',
  updatedAt: 'update_date',
})

ProjectSchema.index({ create_date: 1 })
ProjectSchema.index({ update_date: 1 })

export const Project = mongoose.model('Project', ProjectSchema)
export const ProjectTC = composeMongoose(Project)
