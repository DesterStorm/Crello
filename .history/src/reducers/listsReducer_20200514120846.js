import { CONSTANTS } from '../actions'

const listID = 2 

const initialState = [
  {
    title: 'this is a list title',
    id: 0,
    cards: [
      {
        id: 0,
        text: 'this is a static card inside a static list'
      },
      {
        id: 1,
        text: 'this will use a mix of material UI, React and styled components'
      }
    ]
  },
  {
    title: 'this is a 2nd list',
    id: 0,
    cards: [
      {
        id: 1,
        text: 'this will use a mix of material UI, React and styled components'
      }
    ]
  }
]

const listsReducer = (state = initialState, action) => {
  switch (action.type) {

    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload.title,
        cards: [],
        id: listID
      }
      
    default:
      return state
  }
}

export default listsReducer