import { CONSTANTS } from '../actions'
import { Droppable } from 'react-beautiful-dnd'

export const addList = title => {
  return {
    type: CONSTANTS.ADD_LIST,
    payload: title
  }
}

export const sort = (
  droppableStart,
  droppableEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggable
)