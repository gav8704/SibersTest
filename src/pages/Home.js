import React from 'react'

import HomeHeader from '../components/HomeHeader'
import UserList from '../components/UserList'

const Home = () => {

  return (
    <>
      <HomeHeader />
      <main>
        <UserList />
      </main>
    </>
  )
}

export default Home