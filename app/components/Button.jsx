import React from 'react'
import * as action from './redux/actions'
import { connect } from 'react-redux'

function Button ({ children, onClick }) {

  return(
    <div className="calc-btn"
         onClick={onClick}>
      { children }
    </div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(action.BTN_PRESS(ownProps.children))
      ownProps.btnHandler(ownProps.children)
    }
  }
}

const CalcButton = connect(
  null,
  mapDispatchToProps
)(Button)

export default CalcButton
