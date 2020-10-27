import React from 'react'
import { useSelector } from 'react-redux'

import { getFilteredUserList } from '../redux/selectors' 

import UserItem from './UserItem'

const UserList = () => {
  const userList = useSelector(getFilteredUserList)

  return (
    <section className="contact-container">
      <ul className="user-list">
        {
          userList.map(user => <UserItem key={ user.id } user={ user } />)
        }
      </ul>
    </section>
  )
}

export default UserList