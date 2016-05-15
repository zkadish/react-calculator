// keep number to 14 places and remove trialing zeros
function cleanNum (num) {
  return Number(num.toPrecision(14))
}

export function addFn (x, y) {
  return cleanNum(parseFloat(x) + parseFloat(y))
}

export function subtrackFn (x, y) {
  return cleanNum(parseFloat(x) - parseFloat(y))
}

// Toggle negitive and positive output numbers
export function negativeNums (state) {
  if (state.output[0] === '-') {
    state.output = state.output.slice(1)
  } else {
    state.output = '-' + state.output
  }

  if (state.secondNum) {
    state.secondNum = state.output
  }
}

export function equalFn (arithmatic, state) {
  let result = null
  // if user does not enter a second num and presses the equals button
  if (!state.secondNum) {
    result = arithmatic(state.output, state.firstNum)
    return result
  }

  // user enters an equaltion with 2 numbers
  // then continues press the equal button
  result = arithmatic(state.firstNum, state.secondNum)
  state.firstNum = state.secondNum
  state.secondNum = ''
  return result
}
