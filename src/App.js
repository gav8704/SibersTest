import { useEffect } from 'react'
import { 
  Switch,
  Route, 
} from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { getUserList } from './api'
import { setUserList } from './redux/actions'
import { 
  localStorageHas,
  localStorageGet,
  localStorageSave
} from './helpers/localStorage'

import Home from './pages/Home'
import UserInfo from './pages/UserInfo'

import './styles/index.scss'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const localStorageHasUserList = localStorageHas('userList')

    if (localStorageHasUserList) {
      const userList = localStorageGet('userList')
      dispatch(setUserList(userList))
    } else {
      fetchUserList()
    }
  }, [])

  function fetchUserList () {
    getUserList()
      .then(res => {
        const userList = res.data

        dispatch(setUserList(userList))
        localStorageSave('userList', userList)
      })
  }

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/user/:id">
          <UserInfo />
        </Route>
      </Switch>
    </div>
  )
}

export default App
