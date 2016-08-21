import React from 'react';
import Dashboard from './dashboard/Dashboard';
import Login from './login/Login';

export default class App extends React.Component {
    render() {
        if (this.props.authenticated) {
            return (<Dashboard/>);
        } else {
            return (<Login/>);
        }
    }
}
