import * as Action from './actions'
import { batchActions } from 'redux-batched-actions'
import { addFn, subtrackFn, multiplyFn, divideFn, negativeNums, equalFn } from './arithmaticHandler'

const minus = String.fromCharCode(8722)
const times = String.fromCharCode(215)
const divide = String.fromCharCode(247)

let arithmatic = null
const commandHandler = function (dispatch, getState) {
  const state = getState()
  const firstNum = state.number.firstNum;
  const secondNum = state.number.secondNum;
  let btn = state.keypad.activeBtn
  dispatch(Action.COMMAND(btn))

  switch (btn) {
    case 'AC':
      dispatch(batchActions([
        Action.OUTPUT('0'),
        Action.FIRST_NUM(''),
        Action.SECOND_NUM('')
      ]))
      arithmatic = null
      break
    case '+':
      arithmatic = addFn
      dispatch(batchActions([
        Action.START_SECOND_NUM(true),
        Action.ARITHMATIC('addFn')
      ]))
      if (firstNum && secondNum) {
        dispatch(Action.OUTPUT(equalFn(arithmatic, dispatch, state)))
        return;
      }
      // increment the output - if command is given with
      // no firstNum make the output the firstNum
      if (!state.number.firstNum) {
        dispatch(batchActions([
          Action.FIRST_NUM(state.number.output),
          Action.SECOND_NUM('')
        ]))
      }
      break
    case minus:
      arithmatic = subtrackFn
      dispatch(batchActions([
        Action.START_SECOND_NUM(true),
        Action.ARITHMATIC('subtrackFn')
      ]))
      // increment the output - if command is given with
      // no firstNum make the output the firstNum
      if (!state.number.firstNum) {
        dispatch(batchActions([
          Action.FIRST_NUM(state.number.output),
          Action.SECOND_NUM('')
        ]))
      }
      break
    case '=':
      dispatch(Action.OUTPUT(equalFn(arithmatic, dispatch, state)))
      break
    default:
      break
  }
}

export default commandHandler
