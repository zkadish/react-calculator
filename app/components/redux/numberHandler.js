import * as Action from './actions'
import { batchActions } from 'redux-batched-actions'

const numberHandler = function (dispatch, getState) {

  const state = getState()
  let btn = state.keypad.activeBtn
  let output = state.outputReducer.output
  let secondNum = state.outputReducer.secondNum
  let hasDecimal = output.toString().includes('.')
  let lastCommand = state.commandReducer.command
  //console.log('lastCommand', lastCommand)
  // do not allow for more then one decimal
  if (hasDecimal && btn === '.') {
    return
  }

  if (output === '0' || lastCommand === '=') {
    dispatch(batchActions([
      Action.OUTPUT(btn),
      Action.FIRST_NUM(btn)
    ]))
    return
  }

  if (state.commandReducer.startSecNum) {
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
