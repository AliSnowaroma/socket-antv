import Socket from './socket'

class BaseSocket{
  constructor(){
  }
  init(){
    this.socket= new Socket().init() //存储Socket连接实例
    console.log(this.socket)
  }
}

export default BaseSocket;
