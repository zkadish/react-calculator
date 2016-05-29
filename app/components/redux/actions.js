
export const OUTPUT = (string = '0') => {
  return {
    type: 'OUTPUT',
    value: string
  }
}

export const BTN_PRESS = (btn) => {
  return {
    type: 'BTN_PRESS',
    value: btn
  }
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
