import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import {
    Home,
    About,
    Sessions,
    Reservation,
    Organizations,
    Fitness,
    Login,
    Registration
} from './pages';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/organizations" component={Organizations} />
                    <Route path="/fitness" component={Fitness} />
                    <Route path="/sessions" component={Sessions} />
                    <Route path="/reservation" component={Reservation} />
                    <Route path="/login" component={Login} />
                    <Route path="/registration" component={Registration} />
                </Switch>
            </div>
        );
    }
}
