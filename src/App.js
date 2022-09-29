import React from 'react';
import Header from './components/header';
import Homepage from './components/homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Favpage from './components/favpage';
function App() {
  return (
      <>
    <Router>
        <Header />
        <Switch>
          <Route path="/favorites">
            <Favpage />
          </Route>
          <Route  path="/:name">
            <Homepage />
          </Route>
          <Route path="/">
            <Redirect to="/home">
            </Redirect>
          </Route>
        </Switch>
    </Router>
      </>
  )
}

export default App;
