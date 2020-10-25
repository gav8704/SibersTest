import React from 'react'

import HomeHeader from '../components/HomeHeader'
import ContactsList from '../components/ContactsList'

const Home = () => {

  return (
    <>
      <HomeHeader />
      <main>
        <ContactsList />
      </main>
    </>
  )
}

export default Home