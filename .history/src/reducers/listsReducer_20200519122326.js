import { CONSTANTS } from '../actions'

let listID = 2 
let cardID = 3

const initialState = [
  {
    title: 'this is a list title',
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: 'this is a static card inside a static list'
      },
      {
        id: `card-${1}`,
        text: 'this will use a mix of material UI, React and styled components'
      }
    ]
  },
  {
    title: 'this is a 2nd list',
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: 'this will use a mix of material UI, React and styled components'
      }
    ]
  }
]

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listID}`
      }
      listID += 1
      return [...state, newList]

      case CONSTANTS.ADD_CARD: {
        const newCard = {
          text: action.payload.text,
          id: `card-${cardID}`
        }
        cardID += 1
        const newState = state.map(list => {
          if(list.id === action.payload.listID) {
            return {
              ...list,
              cards: [...list.cards, newCard]
            }
          } else {
            return list
          }
        })

        return newState
      }

      case CONSTANTS.DRAG_HAPPENED:
        const { 
          droppableIdStart,
          droppableIdEnd,
          droppableIndexStart,
          droppableIndexEnd,
          draggableId
         } = action.payload
        const newState = [...state]

        // dragging lists around
        if(type === 'list') {
          const list = newState.splice(droppable)
        }

        // in the same list
        if(droppableIdStart === droppableIdEnd) {
          const list = state.find(list => droppableIdStart === list.id)
          const card = list.cards.splice(droppableIndexStart, 1)
          list.cards.splice(droppableIndexEnd, 0, ...card)
        }

        // to another list
        if(droppableIdStart !== droppableIdEnd) {
          // find the list where drag happened
          const listStart = state.find(list => droppableIdStart === list.id)

          // pull out the card from this list
          const card = listStart.cards.splice(droppableIndexStart, 1)

          // find the list where drag ended
          const listEnd = state.find(list=> droppableIdEnd === list.id)

          // put the card in the new list
          listEnd.cards.splice(droppableIndexEnd, 0, ...card)
        }


        return newState

    default:
      return state
  }
}

export default listsReducer