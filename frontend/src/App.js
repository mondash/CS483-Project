import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Sessions from './pages/Sessions';
import Reservation from './pages/Reservation';
import Organizations from './pages/Organizations';
import Fitness from './pages/Fitness';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path = "/" component = {Home} />
            <Route path = "/about" component = {About} />
            <Route path = "/organizations" component = {Organizations} />
            <Route path = "/fitness" component = {Fitness} />
            <Route path = "/sessions" component = {Sessions} />
            <Route path = "/reservation" component = {Reservation} />
          </Switch>
      </div>
    );
  }
}

export default App;
