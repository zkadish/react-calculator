import React from 'react'
import Header from './Header'
import Output from './Output'
import Keypad from './Keypad'
import numberHandler from '../js/numberHandler'
import commandHandler from '../js/commandHandler'

import '../scss/app.scss'

import { Provider } from 'react-redux'
import createStore from './redux/create-store'
import * as action from './redux/actions'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      output: '0',
      command: 'AC',
      arithmatic: false,
      firstNum: '',
      secondNum: ''
    }

    this.Store = createStore()
    //this.Store.dispatch(action.COMMAND_PRESS('AC'))
    this.Store.dispatch(action.ACTION_TEST)
    console.log(this.Store.getState())
  }

  btnPress(btn) {
    if (btn.match(/[0-9.]/)) {
      this.Store.dispatch(action.NUMBER_PRESS(btn))
      console.log(this.Store.getState())

      let newState = numberHandler(btn, this.state)
      this.setState(newState)
    } else {
      this.Store.dispatch(action.COMMAND_PRESS(btn))
      console.log(this.Store.getState())

      let newState = commandHandler(btn, this.state)
      this.setState(newState)
    }
  }

  render() {
    return(
      <Provider store={ this.props.store }>
        <div className="calc-container">
          <Header />
          <Output output={this.state.output}/>
          <Keypad btnPress={this.btnPress.bind(this)} />
        </div>
      </Provider>
    )
  }
}
