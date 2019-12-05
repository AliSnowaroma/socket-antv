import React from 'react'
import ReactDOM from 'react-dom'
import popNode from './popNode'

let zIndex = 9999;

function FeedBack() {
  this.divList = new Set();
  this.divzIndex = zIndex;
}



FeedBack.prototype.toast = function(options = {
  duration:2000
}){
  this.createDomNode();
  this.divInstance = new popNode(this.domNode)
  this.divInstance.toast()
}

FeedBack.prototype.createDomNode = function(){
  let div = document.createElement('div');
  div.className = "feedback-toast"
  div.style.position = 'absolute';
  div.style.top = '100px';
  div.style.left = '100px';
  div.style.background = '#fff';
  div.style.border = '1px solid #333';
  div.style.minHeight = '200px';
  div.style.minWidth = '200px';
  div.style.zIndex = zIndex;
  zIndex = zIndex + 1;
  div.style.boxShadow = "0 0 0 outside #333"
  document.body.appendChild(div)
  this.domNode = div;
}

export default FeedBack

