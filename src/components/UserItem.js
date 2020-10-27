import React from 'react'
import { Link } from 'react-router-dom'
import { object } from 'prop-types'

const UserItem = ({ user }) => {

  return (
    <li className="user-list__item">
      <Link 
        to={ `/id${ user.id }` }
        className="user__link"
      >
        <img 
          src={ user.avatar } 
          className="user__avatar"
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