import './MathRound.js'

// keep number to 14 places and remove trialing zeros
function cleanNum (num) {
  let numLength = num.toString().length
  let hasDecimal = num.toString().includes('.')

  if (!hasDecimal && numLength <= 16) {
    return Number(num)
  }

  if (hasDecimal && numLength <= 17) {
    return Number(num)
  }

  if (!hasDecimal) {
    return Number(num.toString().slice(0, 15))
  }

  if (hasDecimal) {
    let numArray = num.toString().split('.')
    let roundFactor = -(16 - numArray[0].length)
    return Math.round10(num, roundFactor)
  }

}

export function addFn (x, y) {
  //debugger
  return cleanNum(parseFloat(x) + parseFloat(y))
}

export function subtrackFn (x, y) {
  return cleanNum(parseFloat(x) - parseFloat(y))
}

export function multiplyFn (x, y) {
  return cleanNum(parseFloat(x) * parseFloat(y))
}

export function divideFn (x, y) {
  return cleanNum(parseFloat(x) / parseFloat(y))
}

// Toggle negitive and positive output numbers
export function negativeNums (state) {
  let output = state.output.toString()

  if (output[0] === '-') {
    state.output = output.slice(1)
  } else {
    state.output = '-' + output
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
