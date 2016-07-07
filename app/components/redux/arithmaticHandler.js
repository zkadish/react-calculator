import * as Action from './actions'
import './MathRound.js'

// retreive the length of decimal places entered by user
let decimalLength = function (num) {
  if (!num.toString().includes('.')) {
    return null
  }
  let length = num.toString().split('.')[1].length
  return length
}

// keep number to 16 places and remove trialing zeros
function cleanNum (num, decLength) {
  let numLength = num.toString().length
  let hasDecimal = num.toString().includes('.')

  if (!hasDecimal && numLength <= 16) {
    return Number(num)
  }

  // if (hasDecimal && numLength <= 17) {
  //   console.log('hasDecimal and length <= 17:', num, decLength)
  //   //debugger
  //   //let numArray = num.toString().split('.')
  //   let roundFactor = -(decLength)
  //   return Math.round10(num, -1)
  // }

  if (!hasDecimal) {
    return Number(num.toString().slice(0, 15))
  }

  if (hasDecimal) {
    //let numArray = num.toString().split('.')
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

export function equalFn (arithmatic, dispatch, state) {
  let output = state.number.output
  let firstNum = state.number.firstNum
  let secondNum = state.number.secondNum
  let command = state.command.command
  let result = null
  let deLength = 0
  let secondDeLength = decimalLength(secondNum) || 0
  let firstDeLength = decimalLength(firstNum) || 0
  let outputDeLength = decimalLength(output) || 0

  // equals with no math opperator selected
  if (typeof arithmatic !== 'function') {
    return output
  }

  // if user just presses the equals button
  // after entering an 2 numbers and a command
  if (!firstNum && command === '=') {
    if (secondDeLength > outputDeLength) {
      deLength = secondDeLength
    } else {
      deLength = outputDeLength
    }
    return arithmatic(output, secondNum, deLength)
  }

  // if user doesn't enter a second number
  if (!secondNum) {
    if (firstDeLength > outputDeLength) {
      deLength = firstDeLength;
    } else {
      deLength = outputDeLength;
    }
    return arithmatic(firstNum, output, deLength)
  }

  // user enters an equaltion with 2 numbers
  if (secondDeLength < firstDeLength) {
    result = arithmatic(firstNum, secondNum, firstDeLength)
  } else {
    result = arithmatic(firstNum, secondNum, secondDeLength)
  }

  // only clear firstNum 
  dispatch(Action.FIRST_NUM(''))

  return result
}
