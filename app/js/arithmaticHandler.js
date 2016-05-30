import './MathRound.js'

// retreive length of decimal places in a number(for decimal rounding)
let decimalLength = function (num) {
  return num.toString().split('.')[1].length
}

// keep number to 14 places and remove trialing zeros
function cleanNum (num, decLength) {
  let numLength = num.toString().length
  let hasDecimal = num.toString().includes('.')

  if (!hasDecimal && numLength <= 16) {
    return Number(num)
  }

  // if (hasDecimal && numLength <= 17) {
  //   return Number(num)
  // }

  if (!hasDecimal) {
    return Number(num.toString().slice(0, 15))
  }

  if (hasDecimal) {
    // let numArray = num.toString().split('.')
    // let roundFactor = -(16 - numArray[0].length)
    let roundFactor = -(decLength)
    return Math.round10(num, roundFactor)
  }
}

export function addFn (x, y, decLength) {
  return cleanNum(parseFloat(x) + parseFloat(y), decLength)
}

export function subtrackFn (x, y, decLength) {
  return cleanNum(parseFloat(x) - parseFloat(y), decLength)
}

export function multiplyFn (x, y, decLength) {
  return cleanNum(parseFloat(x) * parseFloat(y), decLength)
}

export function divideFn (x, y, decLength) {
  return cleanNum(parseFloat(x) / parseFloat(y), decLength)
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

  // user hits equals without hitting anything else
  if (typeof arithmatic !== 'function') {
    return '0'
  }

  // if user does not enter a second num and presses the equals button
  if (!state.secondNum) {
    result = arithmatic(state.output, state.firstNum, decimalLength(state.firstNum))
    return result
  }

  // user enters an equaltion with 2 numbers
  if (decimalLength(state.firstNum) < decimalLength(state.secondNum)) {
    result = arithmatic(state.firstNum, state.secondNum, decimalLength(state.secondNum))
  } else {
    result = arithmatic(state.firstNum, state.secondNum, decimalLength(state.firstNum))
  }

  // then continues press the equal button
  state.firstNum = state.secondNum
  state.secondNum = ''
  return result
}
