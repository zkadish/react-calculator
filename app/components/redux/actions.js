// keypad reducer
export const BTN_PRESS = (btn) => {
  return {
    type: 'BTN_PRESS',
    value: btn
  }
}



// output reducer actions
export const OUTPUT = (string) => {
  return {
    type: 'OUTPUT',
    value: string
  }
}

export const FIRST_NUM = (string) => {
  return {
    type: 'FIRST_NUM',
    value: string
  }
}

export const SECOND_NUM = (string) => {
  return {
    type: 'SECOND_NUM',
    value: string
  }
}

export const RESULT = (string) => {
  return {
    type: 'RESULT',
    value: string
  }
}


// command reducer acitons
export const COMMAND_PRESS = (btn) => {
  return {
    type: 'COMMAND_PRESS',
    value: btn
  }
}

export const START_SECOND_NUM = (bool) => {
  return {
    type: 'START_SECOND_NUM',
    value: bool
  }
}

export const NUMBER_PRESS = (btn) => {
  return {
    type: 'NUMBER_PRESS',
    value: btn
  }
}
