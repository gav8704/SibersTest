import React from 'react'
import { Helmet } from 'react-helmet'

import HomeHeader from '../components/HomeHeader'
import UserList from '../components/UserList'
import ScrollUpButton from '../components/ScrollUpButton'

const Home = () => {

  return (
    <>
      <Helmet>
        <title>Contacts</title>
        {/* <script src="../assets/scripts/lazysizes.min.js" async /> */}
      </Helmet>

      <HomeHeader />

      <main>
        <UserList />
      </main>

      <ScrollUpButton />
    </>
  )
}

export default Home