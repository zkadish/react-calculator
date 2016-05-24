import { createStore, combineReducers } from 'redux'

import * as reducers from './reducers'


export default function (data) {
  var reducer = combineReducers(reducers)
  var store =  createStore(reducer, data)

  return store
}
