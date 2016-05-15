import React from 'react'
import Header from './Header'
import Output from './Output'
import Keypad from './Keypad'
import numberHandler from '../js/numberHandler'
import commandHandler from '../js/commandHandler'

import '../scss/app.scss'

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
  }

  btnPress(btn) {

    if (btn.match(/[0-9.]/)) {
      let newState = numberHandler(btn, this.state)
      this.setState(newState)
    } else {
      let newState = commandHandler(btn, this.state)
      this.setState(newState)
      //console.log(this.state)
    }
  }

  // numberHandler(btn) {
  //   console.log('numberHandler', btn);
  //   if (this.state.output === 0) {
  //     this.setState({output: btn});
  //     return;
  //   }
  //
  //   btn = this.state.output + btn;
  //   this.setState({output: btn});
  // }

  // commandHandler() {
  //   console.log('commandHandler');
  // }

  render() {

    return(
      <div className="calc-container">
        <Header />
        <Output output={this.state.output}/>
        <Keypad btnPress={this.btnPress.bind(this)} />
      </div>
    )
  }
}
