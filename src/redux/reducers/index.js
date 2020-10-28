import { combineReducers } from '@reduxjs/toolkit'

import sortFilter from './sortFilter'
import searchInput from './searchInput'
import userList from './userList'

const rootReducer = combineReducers({
  sortFilter,
  searchInput,
  userList
})

export default rootReducer