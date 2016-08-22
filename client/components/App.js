import React from 'react';
import Dashboard from './dashboard/Dashboard';
import Login from './login/Login';
import store from '../store';
import { Provider } from 'react-redux';

export default class App extends React.Component {
    render() {
        return (<Provider store={store}><Login/></Provider>);
    }
}
