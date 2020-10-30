import React, { 
  useEffect,
  Suspense, 
  lazy
} from 'react'
import { 
  Switch,
  Route, 
} from 'react-router-dom'
import { 
  useDispatch,
  useSelector
} from 'react-redux'
import { useAlert } from 'react-alert'

import { fetchUserListApi } from './api'
import { setUserList } from './redux/actions'
import { getUserList } from './redux/selectors'

import Spinner from './components/Spinner'
import './styles/index.scss'

const Home = lazy(() => import('./pages/Home'))
const UserInfo = lazy(() => import('./pages/UserInfo'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

const App = () => {
  const dispatch = useDispatch()
  const alert = useAlert()
  const userList = useSelector(getUserList)

  useEffect(() => {
    !userList.length && fetchUserList()
  }, [])

  function fetchUserList() {
    fetchUserListApi()
      .then(res => {
        const userList = res.data
        dispatch(setUserList(userList))
      })
      .catch(() => {
        alert.show('Something went wrong, try later', {
          type: 'error',
          timeout: 0
        })
      })
  }

  return (
    <div className="app">
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/user/:id">
            <UserInfo />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  )
}

export default App
