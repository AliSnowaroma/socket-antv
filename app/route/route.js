const Router = require('koa-router');
const router = new Router();
let pushDataToClient = null;
let money = 100;

const route = (io) => {
  router.get('/data', async(ctx, next) => {
    ctx.set("Content-Type", "application/json")
    try{
      if(!pushDataToClient){
        pushDataToClient = setInterval( () => {
          money = money + Math.floor(Math.random()*100)
          io.sockets.emit("money",{
            money:money
          })
        },1000)
        ctx.body = JSON.stringify({
          success:true,
          data:{
            message:'开启实时获取数据'
          }
        })
      }else{
        ctx.body = JSON.stringify({
          success:true,
          data:{
            message:'数据推送中'
          }
        })
      }

    }catch(err){
      ctx.body = JSON.stringify({
        success:false,
        data:{
          message:'开启失败'
        }
      })
    }
  });
  router.get('/stop', async(ctx, next) => {
    ctx.set("Content-Type", "application/json")
    try{
      if(pushDataToClient){
        clearInterval(pushDataToClient)
        pushDataToClient = null;
      }
      ctx.body = JSON.stringify({
        success:true,
        code:200,
        data:{
          message:'关闭实时获取数据'
        }
      })
    }catch(err){
      ctx.body = JSON.stringify({
        success:false,
        data:{
          message:'开启失败'
        }
      })
    }
  });
  router.post('/login', async (ctx, next) => {
    let name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';

    console.log(`login with name: ${name}, password: ${password}`);
    if (name === 'hello' && password === '123456') {
      ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
      ctx.response.body = `<h1>Login failed!</h1>
      <p><a href="/">Try again</a></p>`;
    }
  });
  return router;
}

module.exports = route;
