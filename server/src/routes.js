import koaRouter from 'koa-router'; // koa-router@next
import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa';
import schema from './data/schema';

const router = new koaRouter();

// POST и GET запросы будут перенаправляться в схему GraphQL
router.post('/graphql', graphqlKoa({schema: schema}));
router.get('/graphql', graphqlKoa({schema: schema}));

// инструмент для тестирования запросов localhost:3000/graphiql
router.get('/graphiql', graphiqlKoa({endpointURL: '/graphql'}));

export default router;
