import React from 'react'
import Header from './Header'
import Output from './Output'
import Keypad from './Keypad'
import numberHandler from '../js/numberHandler'
import commandHandler from '../js/commandHandler'

import '../scss/index.scss'

import { Provider } from 'react-redux'
import createStore from './redux/create-store'
import * as Action from './redux/actions'

export default class App extends React.Component {
  constructor(props) {
    super()

    // this.state = {
    //   output: '0',
    //   command: 'AC',
    //   arithmatic: false,
    //   firstNum: '',
    //   secondNum: ''
    // }

    console.log('App props/store: ', props.store.getState())

    props.store.subscribe(function () {
      console.log('app.props.store.subscribe:', props.store.getState())
    })
  }

  btnPress(btn) {
    if (btn.match(/[0-9.]/)) {
      this.props.store.dispatch(Action.NUMBER_PRESS(btn))
      //console.log(this.props.store.getState())

      let newState = numberHandler(btn, this.state)
      this.setState(newState)
    } else {
      this.props.store.dispatch(Action.COMMAND_PRESS(btn))
      console.log(this.props.store.getState())

      let newState = commandHandler(btn, this.state)
      this.setState(newState)
    }
  }

  render() {

    return(
      <Provider store={ this.props.store }>
        <div className="calc-container">
          <Header />
          <Output />
          <Keypad />
        </div>
      </Provider>
    )
  }
}
