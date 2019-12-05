import io from 'socket.io-client'
import reduxSocket from './redux-socket'
import updateSocket from '../../config/api/updateSocket'

class Socket{
  constructor(options){
    console.log('new.target.name = ',new.target.name)
    this.socket = null;
    this.socket_uid = null;

  }
  init(options = {}){
    let socketUrl = 'ws://127.0.0.1:3000'
    this.createSocket(socketUrl);
    return this.socket;
  }
  createSocket(socketUrl){
    this.socket = io(socketUrl);
    this.addSocketListener();
    this.addReduxSocket()
  }
  /**
   * connect：连接成功
   * connecting：正在连接
   * disconnect：断开连接
   * connect_failed：连接失败
   * error：错误发生，并且无法被其他事件类型所处理
   * message：同服务器端message事件
   * anything：同服务器端anything事件
   * reconnect_failed：重连失败
   * reconnect：成功重连
   * reconnecting：正在重连
   */
  connect(){
    console.log('连接成功')
    //开启socket实时数据获取
    updateSocket.begin()
  }
  reconnect(){
    console.log('正在重连')
  }
  disconnect(){
    console.log('断开连接')
  }
  connect_failed(){
    console.log('连接失败')
  }
  connecting(){
    console.log('正在连接')
  }
  reconnecting(){
    console.log('正在重连')
  }
  error(){
    console.log('连接错误')
  }
  close(){
    console.log('连接关闭')
  }
  addSocketListener(){
    this.socket.on('connect',this.connect)
    this.socket.on('disconnect',this.disconnect)
    this.socket.on('connecting',this.connecting)
    this.socket.on('connect_failed',this.connect_failed)
    this.socket.on('reconnect',this.reconnect)
    this.socket.on('reconnecting',this.reconnecting)
    this.socket.on('error',this.error)
    this.socket.on('close',this.close)
  }
  addReduxSocket(){
    reduxSocket(this.socket)
  }
}

export default Socket
