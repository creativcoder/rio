import React from 'react';
import Navbar from './Navbar';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard container">
            <Navbar/>
            </div>
        );
    }
}