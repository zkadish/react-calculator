import React from 'react'

import '../scss/button.scss'

class Button extends React.Component {
  constructor() {
    super()
  }

  onclick (e) {
    this.props.btnPress(e.target.innerHTML)
  }

  render() {

    return(
      <div className="calc-btn"
           onClick={this.onclick.bind(this)}>
        { this.props.children }
      </div>
    )
  }
}

export default Button
