import React from 'react'
import { 
  useSelector,
  useDispatch
} from 'react-redux'

import { setSearchInput } from '../redux/actions'
import { getSearchInput } from '../redux/selectors'

import '../styles/components/search-input.scss'

const SearchInput = () => {
  const dispatch = useDispatch()
  const searchInput = useSelector(getSearchInput)

  const handleChange = e => {
    dispatch(setSearchInput(e.target.value))
  }

  return (
    <>
      <input
        value={ searchInput }
        onChange={ handleChange }
        placeholder="Search for user"
        className="search-input"
      />
    </>
  )
}

export default SearchInput