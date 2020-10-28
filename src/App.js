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
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { useAlert } from 'react-alert'

import { fetchUserListApi } from './api'
import { setUserList } from './redux/actions'
import { getUserList } from './redux/selectors'

import Spinner from './components/Spinner'
import './styles/index.scss'

const Home = lazy(() => import('./pages/Home'))
const UserInfo = lazy(() => import('./pages/UserInfo'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

const alertOptions = {
  position: positions.BOTTOM_CENTER,
  timeout: 3000,
  offset: '30px',
  transition: transitions.SCALE
}

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
    // <AlertProvider 
    //   template={ AlertTemplate } 
    //   { ...alertOptions }
    // >
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
    // </AlertProvider>
  )
}

export default App
