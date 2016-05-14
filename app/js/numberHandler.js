//const minus = String.fromCharCode(8722)

function numberHandler(btn, state) {
  //TODO: update state of first and second num
  //TODO: handle negative number command here as well

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

  //TODO: add all commands which require 2 entries
  // if (state.command === '+' || state.command === minus) {
  //   state.secondNum = state.output
  //   //console.log(state.secondNum)
  // }

  return state
}

export default numberHandler
