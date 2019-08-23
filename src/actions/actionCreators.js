import ActionTypes from './actionTypes'

export const addToCart = item => {
  return {
    type: ActionTypes.ADD_ITEM,
    item
  }
}