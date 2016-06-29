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
  let output = state.outputReducer.output
  let firstNum = state.outputReducer.firstNum
  let secondNum = state.outputReducer.secondNum
  let command = state.commandReducer.command
  let result = null

  // debugger

  // equals with no math opperator selected
  if (typeof arithmatic !== 'function') {
    return output
  }
  console.log(secondNum);
  // if user does not enter a second num and presses the equals button
  if (!firstNum && command === '=') {
    return arithmatic(output, secondNum, decimalLength(secondNum))
  }

  if (!secondNum) {
    return arithmatic(firstNum, output, decimalLength(firstNum))
    console.log(state)
  }

  // user enters an equaltion with 2 numbers
  if (decimalLength(firstNum) < decimalLength(secondNum)) {
    result = arithmatic(firstNum, secondNum, decimalLength(secondNum))
  } else {
    result = arithmatic(firstNum, secondNum, decimalLength(firstNum))
  }

  // then continues press the equal button
  //state.firstNum = state.secondNum
  dispatch(Action.FIRST_NUM(''))
  //dispatch(Action.SECOND_NUM(''))
  console.log(state)
  //state.secondNum = ''
  return result
}
