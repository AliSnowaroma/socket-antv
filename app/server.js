const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const http = require('http')
const socketIo = require('socket.io')
const cors = require('koa2-cors');
const SocketInit = require('./controller/socket')
const route = require('./route/route')


const app = new Koa();


const Server = http.createServer(app.callback());
const io = new socketIo(Server);

SocketInit(io)
let router = route(io)
app.use(cors());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods())


app.use(async (ctx,next) => {
    ctx.body = '测试'
})

Server.listen({
    port:3000,
    host:'0.0.0.0'
})
