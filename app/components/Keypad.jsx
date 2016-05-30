import React from 'react'
import Button from './Button'

class Keypad extends React.Component {
  constructor() {
    super()

    this.state = {
      // note: use of character codes - http://www.ascii.cl/htmlcodes.htm
      standardBtns: ['AC', '+/-', '%', 247, '7', '8', '9', 215, '4', '5', '6', 8722, '1', '2', '3', '+', 46, '0', '=']
    }
  }

  render() {
    //console.log(this.props)
    let btnHandler = this.props.btnHandler
    //let store = this.props.store

    var Layout = this.state.standardBtns.map(function (btn, i) {
      if (typeof btn !== 'string') {
        btn = String.fromCharCode(btn)
      }
      return <Button btnHandler={ btnHandler } key={i}>{btn}</Button>
    })

    return(
      <div className="key-pad">
        { Layout }
      </div>
    )
  }
}

export default Keypad
