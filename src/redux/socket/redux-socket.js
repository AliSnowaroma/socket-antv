import store from '../store'
//import BaseSocket from './baseSocket' //这样循环引入会得到undefined的结果，解决办法可以使用函数提升

console.log(store)

export default (socket) => {
  socket.on('money',(data) => {
    console.log('推送数据是：',data)
    store.dispatch({
      type:'receive_money',
      payload:data.money
    })
  })
}


