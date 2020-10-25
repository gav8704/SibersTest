import { 
  Switch,
  Route, 
} from 'react-router-dom'

import Home from './pages/Home'

import './styles/index.scss'

const App = () => {

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App
