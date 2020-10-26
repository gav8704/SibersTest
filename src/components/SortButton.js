import React from 'react'
import { 
  useSelector,
  useDispatch
} from 'react-redux'

import { useWindowSize } from '../custom-hooks'
import { setSortFilter } from '../redux/actions'
import { getSortFilter } from '../redux/selectors'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faArrowAltCircleUp, 
  faArrowAltCircleDown 
} from '@fortawesome/free-solid-svg-icons'

import '../styles/components/sort-button.scss'

const SortButton = () => {
  const { width } = useWindowSize()
  const sortFilter = useSelector(getSortFilter)
  const dispatch = useDispatch()

  const handleClick = () => {
    sortFilter === 'ascending' ? 
        dispatch(setSortFilter('descending')) : 
        dispatch(setSortFilter('ascending'))
  }

  return (
    <button
      onClick={ handleClick } 
      className="btn-sort"
    >
      <FontAwesomeIcon icon={ 
        sortFilter === 'ascending' ? 
          faArrowAltCircleUp : 
          faArrowAltCircleDown 
        } 
      />

      { width > 576 && sortFilter }
    </button>
  )
}

export default SortButton