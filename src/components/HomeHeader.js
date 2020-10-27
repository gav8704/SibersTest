import React from 'react'

import SortButton from './SortButton'
import SearchInput from './SearchInput'

const HomeHeader = () => {

  return (
    <header className="home-header">
      <h1 className="main-caption">Contacts</h1>

      <div className="home-header__toolbar">
        <SearchInput />
        <SortButton />
      </div>

    </header>
  ) 
}

export default HomeHeader