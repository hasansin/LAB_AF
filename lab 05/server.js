const Koa = require('koa');
const bodyParser = require('koa-body-parser');
const HomeRoutes = require('./routes/home.router');
const  R= require('./routes/post.routes');

const app = new Koa();
app.use(bodyParser());

app.use(HomeRoutes.routes())
    .use(HomeRoutes.allowedMethods);

app.use(R.routes())
    .use(R.allowedMethods);

app.listen(3000);
console.log('Application is running on port 3000');