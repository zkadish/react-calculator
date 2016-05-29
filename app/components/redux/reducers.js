let keypadBtns = {
  keypadBtn: ['AC', '+/-', '%', 247, '7', '8', '9', 215, '4', '5', '6', 8722, '1', '2', '3', '+', 46, '0', '=']
}

export const keypadReducer = function (state = keypadBtns, action) {
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

let defaultOutput = {
  output: '0'
}

export const outputReducer = function (state = defaultOutput, action) {
  switch (action.type) {
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

export const commandReducer = function (state = {}, action) {
  switch (action.type) {
    case 'COMMAND_PRESS':
      return {
        ...state,
        command: action.value
      }
    default:
      return state
  }
}

export const numberReducer = function (state = {}, action) {
  switch (action.type) {
    case 'NUMBER_PRESS':
      return {
        ...state,
        activeNum: action.value
      }
    default:
      return state
  }
}
