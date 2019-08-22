import cart from './cartReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  // The object returned by this function must have a key named "cart," as "cart"
  // will be a prop on our cart container element.
  cart
})

export default rootReducer