import { CONSTANTS } from '../actions'

export const addCard = title => {
  return {
    type: CONSTANTS.ADD_C,
    payload: title
  }
}