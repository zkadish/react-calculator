import {addFn, subtrackFn, negativeNums, equalFn} from './arithmaticHandler'

const minus = String.fromCharCode(8722)
let arithmatic = null

function commandHandler (btn, state) {

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
