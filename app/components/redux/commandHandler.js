import * as Action from './actions'
import { addFn, subtrackFn, multiplyFn, divideFn, negativeNums, equalFn } from './arithmaticHandler'

let arithmatic = null
const commandHandler = function (btn, store) {
  const state = store.getState()

  switch (btn) {
    case 'AC':
      store.dispatch(Action.OUTPUT('0'))
      store.dispatch(Action.FIRST_NUM(''))
      store.dispatch(Action.SECOND_NUM(''))
      arithmatic = null
      break
    case '+':
      store.dispatch(Action.START_SECOND_NUM(true))
      arithmatic = addFn
      break
    case '=':
      store.dispatch(Action.OUTPUT(equalFn(arithmatic, store)))
      break
    default:
      break
  }



}

export default commandHandler
