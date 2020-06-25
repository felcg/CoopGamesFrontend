import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import Frontpage from './components/Frontpage/Frontpage'
import Search from './components/Search/Search'
import GameFullInfo from './components/GameFullInfo/GameFullInfo'
import Home from './components/Home/Home'

export default () => (
  <Switch>
    <Route exact path="/games/:gameId" component={withRouter(GameFullInfo)} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/platforms/:platform" component={withRouter(Frontpage)} />
    <Route exact path="/Home" component={withRouter(Home)} />
    <Route exact path="/" component={withRouter(Frontpage)} />
  </Switch>

)
