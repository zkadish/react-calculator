// keep number to 14 places and remove trialing zeros
function cleanNum (num) {
  return Number(num.toPrecision(14))
}

function addFn (x, y) {
  return cleanNum(parseFloat(x) + parseFloat(y))
}

function subtrackFn (x, y) {
  return cleanNum(parseFloat(x) - parseFloat(y))
}

// Toggle negitive and positive output numbers
function negativeNums (state) {
  if (state.output[0] === '-') {
    state.output = state.output.slice(1)
  } else {
    state.output = '-' + state.output
  }

  if (state.secondNum) {
    state.secondNum = state.output
  }
}

function equalFn (arithmatic, state) {
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

let arithmatic = null

function commandHandler (btn, state) {
  const minus = String.fromCharCode(8722)

  switch(btn) {
  case 'AC':
    state.output = '0'
    state.command = 'AC'
    state.arithmatic = false
    state.firstNum = ''
    state.secondNum = ''
    break
  case '+/-':
    if (state.output === '0') break
    negativeNums(state)
    break
  case '+':
    arithmatic = addFn
    state.arithmatic = true
    state.command = '+'
    // assign output to firstNum
    state.firstNum = state.output
    break
  case minus:
    arithmatic = subtrackFn
    state.arithmatic = true
    state.command = minus
    // assign output to firstNum
    state.firstNum = state.output
    break
  case '=':
    state.arithmatic = true
    state.command = '='
    state.output = equalFn(arithmatic, state)
    break
  default:
    break
  }

  return state
}

export default commandHandler
