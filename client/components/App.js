import React from 'react';
import Dashboard from './dashboard/Dashboard';
import Login from './login/Login';
import {Router, Route, browserHistory } from 'react-router';
import { store } from '../index';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.requireAuth = this.requireAuth.bind(this);
    }
    requireAuth(nextState, replace) {
        if (store.getState().login.authenticated===null) {
            replace({
                pathname: '/login',
                state: { nextPathname: nextState.location.pathname }
            })
        }
    }
    render() {
        return (<Router history={browserHistory}>
            <Route path="/" component={Dashboard} onEnter={this.requireAuth}/>
            <Route path="login" component={Login}/>
            <Route path="dashboard" component={Dashboard}/>
        </Router>);
    }
}
