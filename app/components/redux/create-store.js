import { createStore, combineReducers, applyMiddleware } from 'redux'
import { enableBatching } from 'redux-batched-actions'
import thunkMiddleware from 'redux-thunk'
import * as reducers from './reducers'


export default function (data) {
  var reducer = combineReducers(reducers)
  var store = applyMiddleware(thunkMiddleware.withExtraArgument('test'))(createStore)
  return store(enableBatching(reducer), data)
}
