import React, { 
  useEffect,
  useRef 
} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

import '../styles/components/scroll-up-button.scss'

const ScrollUpButton = () => {
  const scrollUpBtn = useRef(null)

  useEffect(() => {
    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleScroll () {
    if(window.pageYOffset > 500){
      scrollUpBtn.current.style.display = "block"
    }else{
      scrollUpBtn.current.style.display = "none"
    }
  }

  function handleClick () {
    window.scrollTo({
			top:0,
			left:0,
			behavior:'smooth'
		})
  }

  return (
    <button
      onClick={ handleClick }
      ref={ scrollUpBtn } 
      className='btn-scroll-up'
    >
      <FontAwesomeIcon icon={ faChevronUp } />
    </button>
  )
}

export default ScrollUpButton