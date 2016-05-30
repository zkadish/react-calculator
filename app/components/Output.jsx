import React from 'react'
//import createStore from './redux/create-store'
import * as Action from './redux/actions'
import { connect } from 'react-redux'

// const Store = createStore()
// console.log(Store)
// Store.subscribe(function () {
//   console.log('UPDATED!');
// })

class Output extends React.Component {
  // This should remain a statefull component so
  // there is control over when it rerenders
  constructor(props) {
    super(props)

    // set defalult in output reducer
    //props.dispatch(Action.OUTPUT('0'))
  }

  componentWillReceiveProps() {
    //this.setState({value: this.props.output})
  }

  shouldComponentUpdate() {
    return true
  }

  render() {
    console.log('output component', this.props)

    return(
      <div className="output">{this.props.output}</div>
    )
  }
}

const mapStateToProps = function (state) {
  //console.log(state)
  return {
    output: state.outputReducer.output
    //reduxState: state
  }
}

const connectedOutput = connect(mapStateToProps)(Output)

export default connectedOutput
