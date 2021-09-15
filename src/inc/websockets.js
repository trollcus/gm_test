import ws from 'ws'
import { useServer } from 'graphql-ws/lib/use/ws'

import schema from '../app/schema'

const initiateWebsocketServer = server => {
  const wsServer = new ws.Server({
    server,
  })

  useServer(
    {
      schema,
      onConnect: ctx => {
        console.log('Connect', ctx)
      },
      onSubscribe: (ctx, msg) => {
        console.log('Subscribe', { ctx, msg })
      },
      onNext: (ctx, msg, args, result) => {
        console.debug('Next', { ctx, msg, args, result })
      },
      onError: (ctx, msg, errors) => {
        console.error('Error', { ctx, msg, errors })
      },
      onComplete: (ctx, msg) => {
        console.log('Complete', { ctx, msg })
      },
    },
    wsServer
  )
}

export default initiateWebsocketServer
