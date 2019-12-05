import { combineReducers } from 'redux'
import test from './test'
import socket from './socket'

const reducer = combineReducers({test,socket})

export default reducer
