import React from 'react'
import * as action from './redux/actions'
import { connect } from 'react-redux'

import numberHandler from './redux/numberHandler'

function Button ({ children, onClick, btnHandler }) {

  return(
    <div className="calc-btn"
         onClick={onClick}>
      { children }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    // return empty object: need this so connect
    //  has something to pass into first argument
  }
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
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default CalcButton
