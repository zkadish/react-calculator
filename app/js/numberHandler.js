function numberHandler(btn, state) {
  let hasDecimal = state.output.toString().includes('.')

  if (state.output === '0') {
    state.output = btn
    return state
  }

  if (state.arithmatic) {
    state.secondNum = state.output = btn
    state.arithmatic = false
    return state
  }

  if (!hasDecimal && state.output.length >= 16 || hasDecimal && state.output.length >= 17) {
    return state
  }

  if (state.secondNum) {
    state.secondNum = state.output += btn
    return state
  }

  state.output += btn

  return state
}

export default numberHandler
