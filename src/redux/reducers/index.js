import { combineReducers } from '@reduxjs/toolkit'

import sortFilter from './sortFilter'
import userList from './userList'

const rootReducer = combineReducers({
  sortFilter,
  userList
})

export default rootReducer