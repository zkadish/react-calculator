import { addFn, subtrackFn, multiplyFn, divideFn, negativeNums, equalFn } from './arithmaticHandler'

const minus = String.fromCharCode(8722)
const times = String.fromCharCode(215)
const divide = String.fromCharCode(247)

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
    case '%':
      if (state.secondNum) {
        state.output = state.secondNum = state.firstNum * (state.output * .01)
      } else {
        state.output = state.output * .01
      }
      break
    case '+':
      arithmatic = addFn
      state.arithmatic = true
      state.command = '+'
      state.firstNum = state.output // assign output to firstNum
      break
    case minus:
      arithmatic = subtrackFn
      state.arithmatic = true
      state.command = minus
      state.firstNum = state.output // assign output to firstNum
      break
    case times:
      arithmatic = multiplyFn
      state.arithmatic = true
      state.command = times
      state.firstNum = state.output // assign output to firstNum
      break
    case divide:
      arithmatic = divideFn
      state.arithmatic = true
      state.command = divide
      state.firstNum = state.output // assign output to firstNum
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
