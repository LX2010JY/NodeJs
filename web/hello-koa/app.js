/**
 * Created by three on 16-8-30.
 */
//在koa2中，我们导入的是一个class，因此用大写的Koa表示
const Koa = require('koa');

const app = new Koa();
app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});
app.listen(3000);
console.log('app started at port 3000...');