import React from 'react'
import { BTN_PRESS } from './redux/actions'
import { connect } from 'react-redux'

function Button ({ children, onClick }) {

  return(
    <div className="calc-btn"
         onClick={onClick}>
      { children }
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(BTN_PRESS(ownProps.children))
      //console.log(ownProps.children)
    }
  }
}

const CalcButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default CalcButton
