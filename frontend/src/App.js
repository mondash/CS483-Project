import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Sessions from './pages/Sessions';
import Reservation from './pages/Reservation';
import Organizations from './pages/Organizations';
import Fitness from './pages/Fitness';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path = "/" component = {Home} />
          <Route path = "/sessions" component = {Sessions} />
          <Route path = "/reservation" component = {Reservation} />
          <Route path = "/organizations" component = {Organizations} />
          <Route path = "/fitness" component = {Fitness} />
        </Switch>
    </div>
  );
}

export default App;
