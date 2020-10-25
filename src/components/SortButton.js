import React, { useEffect } from 'react'

import { useWindowSize } from '../custom-hooks'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'

import '../styles/components/sort-button.scss'

const SortButton = () => {
  const { width } = useWindowSize()

  useEffect(() => {
    console.log(width)
  }, [width])

  return (
    <button className="btn-sort">
      <FontAwesomeIcon icon={ faArrowAltCircleUp } />

      {
        width > 576 && 'Ascending'
      }
      
    </button>
  )
}

export default SortButton