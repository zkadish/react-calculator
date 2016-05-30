import React from 'react'
import { Provider } from 'react-redux'
import createStore from './redux/create-store'
import * as Action from './redux/actions'

import Header from './Header'
import Output from './Output'
import Keypad from './Keypad'
import numberHandler from './redux/numberHandler'
import commandHandler from './redux/commandHandler'

import '../scss/index.scss'

class App extends React.Component {
  constructor(props) {
    super()

    // this.state = {
    //   output: '0',
    //   command: 'AC',
    //   arithmatic: false,
    //   firstNum: '',
    //   secondNum: ''
    // }

    //console.log('App props/store: ', props.store.getState())

    props.store.subscribe(function () {
      //console.log('app.props.store.subscribe:', props.store.getState())
    })
  }

  // btnPress(btn) {
  //   if (btn.match(/[0-9.]/)) {
  //     this.props.store.dispatch(Action.NUMBER_PRESS(btn))
  //     //console.log(this.props.store.getState())
  //
  //     let newState = numberHandler(btn, this.state)
  //     this.setState(newState)
  //   } else {
  //     this.props.store.dispatch(Action.COMMAND_PRESS(btn))
  //     console.log(this.props.store.getState())
  //
  //     let newState = commandHandler(btn, this.state)
  //     this.setState(newState)
  //   }
  // }

  btnHandler(btn) {
    const store = this.props.store

    if (btn.match(/[0-9.]/)) {
      //console.log('button')
      numberHandler(btn, store)
    } else {
      console.log('command')
      store.dispatch(Action.COMMAND_PRESS(btn))
      commandHandler(btn, store)
    }
  }

  render() {

    return(
      <Provider store={ this.props.store }>
        <div className="calc-container">
          <Header />
          <Output />
          <Keypad btnHandler={ this.btnHandler.bind(this) } />
        </div>
      </Provider>
    )
  }
}

export default App
