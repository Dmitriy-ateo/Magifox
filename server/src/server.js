// Main settings of thie server

// koa - node.js фреймворк на базе которого запускается сервер
// koa-router - маршрутизация на сервере
// graphql-server-koa модуль связки, чтобы подружить Koa и GraphQL
import koa from 'koa'; // koa@2
import koaBody from 'koa-bodyparser'; // koa-bodyparser@next
import router from './routes';
import './db';

const app = new koa();
const PORT = 3001;

// koaBody is needed just for POST.
app.use(koaBody());

app.use(router.routes());
app.use(router.allowedMethods());

// запуск сервера
app.listen(PORT, () => {
  console.log('Server is running on', 'localhost:' + PORT);
  console.log('GraphiQL dashboard', 'localhost:' + PORT + '/graphiql');
});
