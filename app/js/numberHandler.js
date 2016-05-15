function numberHandler(btn, state) {

  if (state.output === '0') {
    state.output = btn
    return state
  }

  if (state.arithmatic) {
    state.output = state.secondNum = btn
    state.arithmatic = false
    return state
  }

  state.output += btn

  return state
}

export default numberHandler
