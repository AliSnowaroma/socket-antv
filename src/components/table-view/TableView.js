import React, { Component } from 'react'
import { connect } from 'react-redux'
import FeedBack from '../feedback'

@connect(
  state => ({
    socket:state.socket
  })
)
export default class TableView extends Component {
  constructor(){
    super()
  }
  state = {

  }
  static defaultProps = {
    socket:{
      money:0
    }
  }
  static getDerivedStateFromProps(prevState, prevProps){
    return null
  }
  onBegin = () => {
    this.updateSocketApi.getMoney().then( data => {
      console.log(data)
      //FeedBack.toast();
    })
  }
  onStop = () => {
    this.updateSocketApi.stopMoney().then( data => {
      console.log(data)
    })
  }
  render() {
    return (
      <div className = "socket-box">
        <div className="money">
          实时销售额：<span style = {{color:'blue',fontSize:'20px'}}>{this.props.socket.money}</span> 元
        </div>
        <button onClick = {this.onBegin} style = {{marginRight:'15px'}}>开启实时数据</button>
        <button onClick = {this.onStop}>暂停</button>
      </div>
    )
  }
}
