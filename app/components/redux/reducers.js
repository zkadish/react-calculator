let keypadDefault = {
  keypadBtn: ['AC', '+/-', '%', 247, '7', '8', '9', 215, '4', '5', '6', 8722, '1', '2', '3', '+', 46, '0', '='],
  activeBtn: 'AC'
}
export const keypad = function (state = keypadDefault, action) {
  switch (action.type) {
    case 'BTN_PRESS':
      return {
        ...state,
        activeBtn: action.value
      }
    default:
      return state
  }
}

let defaultCommand = {
  command: 'AC',
  startSecNum: false,
  arithmatic: ''
}
export const command = function (state = defaultCommand, action) {
  switch (action.type) {
    case 'COMMAND':
      return {
        ...state,
        command: action.value
      }
    case 'START_SECOND_NUM':
      return {
        ...state,
        startSecNum: action.value
      }
    case 'arithmatic':
      return {
        ...state,
        arithmatic: action.value
      }
    default:
      return state
  }
}

let numberDefault = {
  activeNum: '0',
  output: '0',
  firstNum: '',
  secondNum: ''
}

export const number = function (state = numberDefault, action) {
  switch (action.type) {
    case 'NUMBER_PRESS':
      return {
        ...state,
        activeNum: action.value
      }
    case 'OUTPUT':
      return {
        ...state,
        output: action.value
      }
    case 'FIRST_NUM':
      return {
        ...state,
        firstNum: action.value
      }
    case 'SECOND_NUM':
      return {
        ...state,
        secondNum: action.value
      }
    default:
      return state
  }
}
