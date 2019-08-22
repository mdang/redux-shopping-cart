import { createStore } from 'redux'
import rootReducer from '../reducers/index'

export default (initialState) => {
  return createStore(rootReducer, initialState)
}




/**
import { createStore } from 'redux'
import todoApp from '../reducers/index'
const store = createStore(todoApp)

export default store
 */