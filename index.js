import React, { Component } from 'react'
//import { render } from 'react-dom'
import ReactDOM from 'react-dom'
import App from './src/App'
import updateSocket from './src/config/api/updateSocket'

Component.prototype.updateSocketApi = updateSocket.apiList();



const container = document.getElementById('container')
ReactDOM.render(<App></App>,container)
