import { FastifyInstance } from 'fastify'

const routes = (fastify: FastifyInstance) => {
  fastify.register(import('./example/example.routes'))
  return fastify
}

export default routes
