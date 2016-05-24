export const commandReducer = function (state = {}, action) {
  console.log('commandReducer was called with state: ', state, 'and action', action)

  switch (action.type) {
  case 'TEST_ACTION':
    return {
      ...state,
      message: action.value
    }
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
  console.log('numberReducer was called with state: ', state, 'and action', action)

  switch (action.type) {
  case 'NUMBER_PRESS':
    return {
      ...state,
      number: action.value
    }
  default:
    return state
  }
}
