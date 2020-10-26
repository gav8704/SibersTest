import React from 'react'

import HomeHeader from '../components/HomeHeader'
import ContactList from '../components/ContactList'

const Home = () => {

  return (
    <>
      <HomeHeader />
      <main>
        <ContactList />
      </main>
    </>
  )
}

export default Home