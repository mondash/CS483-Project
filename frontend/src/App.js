// TODO Implement redux (actions, reducers)

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from 'Reducers';

import 'font-awesome/css/font-awesome.min.css';
import './App.css';

import {
    Home,
    About,
    Sessions,
    Reservation,
    Organizations,
    Fitness,
    Login,
    Registration,
    Resform,
    Fitnessmember,
    AccountInfo
} from 'Pages';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            store: createStore(reducers, applyMiddleware(thunk))
        };
    }

    render() {
        const { store } = this.state;

        return (
            <div className="App">
                <Provider store={store}>
                    <Router>
                        <Switch>
                            <Route path="/about" component={About} />
                            <Route path="/organizations" component={Organizations} />
                            <Route path="/fitness" component={Fitness} />
                            <Route path="/sessions" component={Sessions} />
                            <Route path="/reservation" component={Reservation} />
                            <Route path="/login" component={Login} />
                            <Route path="/register" component={Registration} />
                            <Route path="/resform" component={Resform} />
                            <Route path="/fitnessmember" component={Fitnessmember} />
                            <Route path="/account" component={AccountInfo} />
                            <Route path="/" component={Home} />
                        </Switch>
                    </Router>
                </Provider>
            </div>
        );
    }
}
