import '../scss/output.scss'

import React from 'react'

class Output extends React.Component {
  // This could be a state less function
  // not seeing any reason for having state here
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
  }

  componentWillReceiveProps() {
    this.setState({value: this.props.output})
  }

  shouldComponentUpdate() {
    return true
  }

  componentWillUpdate() {

  }

  render() {
    //console.log('Output: ', this.state.value, this.props.output)
    return(
      <div className="output">{this.props.output}</div>
    )
  }
}

export default Output
