import { configureStore } from '@reduxjs/toolkit'
import { localStorageSave } from '../helpers/localStorage'

import rootReducer from './reducers'

const store = configureStore({
  reducer: rootReducer
})

store.subscribe(() => {
  const { userList } = store.getState()
  userList.length && localStorageSave('userList', userList)
})

export default store