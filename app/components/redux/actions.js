// export const actionTest = function () {
//   return {
//     type: 'TEST_ACTION',
//     value: 'Action Test!'
//   }
// }

export const ACTION_TEST = {
  type: 'TEST_ACTION',
  value: 'Action Test!'
}

export const COMMAND_PRESS = (btn) => {
  return {
    type: 'COMMAND_PRESS',
    value: btn
  }
}

export const NUMBER_PRESS = (btn) => {
  return {
    type: 'NUMBER_PRESS',
    value: btn
  }
}
