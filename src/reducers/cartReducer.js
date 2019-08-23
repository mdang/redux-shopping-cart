import ActionTypes from '../actions/actionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return [...state, action.item]
    default:
      return state
  }
}