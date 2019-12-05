import React, { Component, createContext } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import BaseSocket from './redux/socket/baseSocket'
import TableView from './components/table-view'
import './index.scss'
new BaseSocket().init()


export default class App extends Component {
  constructor(){
    super()
  }
  // getData = () =>{
  //   fetch("http://localhost:3000",{
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json;charset=UTF-8'
  //     }
  //   }).then(res => {
  //     return res.json()
  //   }).then(data => {
  //     console.log(data)
  //   })
  // }
  componentDidMount() {

  }
  render() {
    return (
      <Provider store = {store}>
        <div className = "sale-view">
          <TableView></TableView>
        </div>
      </Provider>
    );
  }
}
