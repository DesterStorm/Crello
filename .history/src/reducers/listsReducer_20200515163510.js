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
        id: listID
      }
      listID += 1
      return [...state, newList]

      case CONSTANTS.ADD_CARD:
        const newCard = {
          text: action.payload.text,
          id: cardID
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
    default:
      return state
  }
}

export default listsReducer