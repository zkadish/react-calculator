import React from 'react'
import { Provider, connect } from 'react-redux'
import createStore from './redux/create-store'
import * as Action from './redux/actions'

import Header from './Header'
import Output from './Output'
import Keypad from './Keypad'
import numberHandler from './redux/numberHandler'
import commandHandler from './redux/commandHandler'

import '../scss/index.scss'

class App extends React.Component {
  constructor() {
    super()

    // this.state = {
    //   output: '0',
    //   command: 'AC',
    //   arithmatic: false,
    //   firstNum: '',
    //   secondNum: ''
    // }

  }

  btnHandler(btn) {
    if (btn.match(/[0-9.]/)) {
      this.props.dispatch(numberHandler)
    } else {
      this.props.dispatch(commandHandler)
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

let AppMap = connect()(App)

export default AppMap
