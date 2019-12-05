import React from 'react'
import ReactDOM from 'react-dom'
import PopView from './PopView'

//将元素抽离为不同的实例
function popNode(div){
  this.div = div
}
popNode.prototype.reset = function(divList){
  console.log(this)
  if(!this.div){
    return;
  }
  document.body.removeChild(this.div)
  this.div = null
}
popNode.prototype.toast = function(options = {
  duration:2000
}){
  console.log('111')
  ReactDOM.createPortal(
    PopView,
    this.div
  )
  setTimeout(() => {
    document.body.removeChild(this.div)
  },options.duration)
}

export default popNode;
