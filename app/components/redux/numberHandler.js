import * as Action from './actions'
import { batchActions } from 'redux-batched-actions'

const numberHandler = function (dispatch, getState) {

  const state = getState()
  let btn = state.keypad.activeBtn
  let output = state.number.output
  let secondNum = state.number.secondNum
  let hasDecimal = output.toString().includes('.')
  let lastCommand = state.command.command
  
  if (hasDecimal && btn === '.' && !state.command.startSecNum) {
    return
  }

  // first number
  if (output === '0' || lastCommand === '=') {
    if (btn === '.') {
      dispatch(batchActions([
        Action.OUTPUT(output + btn),
        Action.FIRST_NUM(output + btn)
      ]))
      return
    }
    dispatch(batchActions([
      Action.OUTPUT(btn),
      Action.FIRST_NUM(btn)
    ]))
    return
  }

  // second number
  if (state.command.startSecNum) {
    console.log('startSecNum')
    if (btn === '.') {
      dispatch(batchActions([
        Action.OUTPUT('0' + btn),
        Action.SECOND_NUM('0' + btn),
        Action.START_SECOND_NUM(false)
      ]))
      return
    }
    dispatch(batchActions([
      Action.OUTPUT(btn),
      Action.SECOND_NUM(btn),
      Action.START_SECOND_NUM(false)
    ]))
    return
  }

  if (!hasDecimal && output.length >= 16 || hasDecimal && output.length >= 17) {
    return
  }

  dispatch(Action.OUTPUT(output += btn))

  if (secondNum) {
    dispatch(Action.SECOND_NUM(output))
  } else {
    dispatch(Action.FIRST_NUM(output))
  }
}

export default numberHandler
