
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
  }
]

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default listsReducer