import {Switch, Route} from 'react-router-dom'

import Login from './components/LoginRoute'
import Home from './components/HomeRoute'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={Home} />
  </Switch>
)

export default App
