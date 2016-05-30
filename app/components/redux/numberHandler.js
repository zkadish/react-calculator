import * as Action from './actions'

const numberHandler = function (btn, store) {
  const state = store.getState()
  let output = state.outputReducer.output
  let secondNum = state.outputReducer.secondNum
  let hasDecimal = output.toString().includes('.')

  // do not allow for more then one decimal
  //debugger
  if (hasDecimal && btn === '.') {
    return
  }

  if (output === '0') {
    store.dispatch(Action.OUTPUT(btn))
    store.dispatch(Action.FIRST_NUM(btn))
    return
  }

  if (state.commandReducer.startSecNum) {
    store.dispatch(Action.OUTPUT(btn))
    store.dispatch(Action.SECOND_NUM(btn))
    store.dispatch(Action.START_SECOND_NUM(false))
    return
  }

  if (!hasDecimal && output.length >= 16 || hasDecimal && output.length >= 17) {
    return
  }

  store.dispatch(Action.OUTPUT(output += btn))

  if (secondNum) {
    store.dispatch(Action.SECOND_NUM(output))
  } else {
    store.dispatch(Action.FIRST_NUM(output))
  }
}

export default numberHandler
