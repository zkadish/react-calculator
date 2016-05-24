import './scss/global.scss'

import React from 'react'
import { render } from 'react-dom'
import createStore from './components/redux/create-store'

import App from './components/App'

const store = createStore()

render(
  <App store={store}/>,
  document.getElementById('app')
)
