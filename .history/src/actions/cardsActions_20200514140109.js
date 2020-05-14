import { CONSTANTS } from '../actions'

export const addCard = title => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: text
  }
}