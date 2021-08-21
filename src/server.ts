import fastify, { FastifyInstance } from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'

const PORT = process.env.PORT ?? 2121
const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({ logger: true })

// plugins
server.register(import('./modules'))

const start = async () => {
  try {
    server.listen(PORT)
  } catch (error) {
    server.log.error(error)
    process.exit(1)
  }
}

export { start }
