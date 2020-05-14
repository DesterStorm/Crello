import { CONSTANTS } from '../actions'

export const addCard = (listIDtext => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: text
  }
}