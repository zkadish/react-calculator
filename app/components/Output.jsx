import React from 'react'
import { connect } from 'react-redux'

class Output extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="output">{this.props.output}</div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    output: state.number.output
  }
}

const connectedOutput = connect(mapStateToProps)(Output)

export default connectedOutput
