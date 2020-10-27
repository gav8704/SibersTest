import React from 'react'
import { Link } from 'react-router-dom'
import { object } from 'prop-types'
import lazySizes from 'lazysizes'

const UserItem = ({ user }) => {

  return (
    <li className="user-list__item">
      <Link 
        to={ `/user/id${ user.id }` }
        className="user__link"
      >
        <img 
          data-src={ user.avatar } 
          className="user__avatar circle lazyload"
          alt="avatar"
        />

        <span className="user__name">{ user.name }</span>
      </Link>
      
    </li>
  )
}

UserItem.propTypes = {
  user: object.isRequired
}

export default UserItem