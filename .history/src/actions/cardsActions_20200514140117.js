import { CONSTANTS } from '../actions'

export const addCard = text => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: text
  }
}