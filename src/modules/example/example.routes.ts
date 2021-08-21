import { FastifyInstance } from 'fastify'
import { getEaxmple } from './example.controller'

const exampleTest = (fastify: FastifyInstance) => {
  fastify.get('/example', getEaxmple)
  return fastify
}

export default exampleTest
