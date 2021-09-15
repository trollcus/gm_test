import { schemaComposer } from '../../inc/schemaComposer'

import { PrevisitQuery, PrevisitMutation } from './previsit'
import { ProjectQuery, ProjectMutation } from './project'

import { Project, Previsit } from '../model'
;(async () => {
  const projects = await Project.create([
    { name: 'Project1' },
    { name: 'Project2' },
    { name: 'Project3' },
  ])

  await Previsit.create([
    { email: 'Previsit1', project_id: projects[0]._id },
    { email: 'Previsit2', project_id: projects[1]._id },
    { email: 'Previsit3', project_id: projects[2]._id },
  ])
})()

schemaComposer.Query.addFields({
  ...PrevisitQuery,
  ...ProjectQuery,
})

schemaComposer.Mutation.addFields({
  ...PrevisitMutation,
  ...ProjectMutation,
})

schemaComposer.Subscription.addFields({})

export default schemaComposer.buildSchema()
