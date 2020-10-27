import React from 'react'
import { useSelector } from 'react-redux'

import { getUserList } from '../redux/selectors' 

import UserItem from './UserItem'

const UserList = () => {
  const userList = useSelector(getUserList)

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