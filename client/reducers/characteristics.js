
export default function charactersticsReducer (state=[], action) {
  switch(action.type) {
    case 'RECEIVE_CHARACTERISTICS':
      return [...action.characteristics]
    case 'ADD_CHARACTERISTIC':
      return [...state, action.characteristic]
    default:
      return state
  }
}
