import { createSelector } from '@reduxjs/toolkit'
import { 
  sortByAscending,
  sortByDescending
} from '../helpers/sorting'

export const getSortFilter = state => state.sortFilter
export const getSearchInput = state => state.searchInput
export const getUserList = state => state.userList

export const getFilteredUserList = createSelector(
  [getSortFilter, getSearchInput, getUserList],
  (sortFilter, searchInput, userList) => {
    const filteredUserList = userList.filter(user => {
      return user.name.toLowerCase().includes(searchInput)
    })

    return ((sortFilter.toLowerCase() === 'ascending') ? 
      filteredUserList.sort(sortByAscending) : 
      filteredUserList.sort(sortByDescending))
  }
)
