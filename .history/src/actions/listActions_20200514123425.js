import { CONSTANTS } from '../actions'

export const addList = title => {
  return {
    type: CONSTANTS.ADD,
    payload: title
  }
}