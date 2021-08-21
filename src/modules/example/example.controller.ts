import { FastifyReply, FastifyRequest } from 'fastify';

const getEaxmple = (request: FastifyRequest, reply: FastifyReply) => {
  reply.send({ data: 'Text example works... Yay!' });
};

export { getEaxmple };
