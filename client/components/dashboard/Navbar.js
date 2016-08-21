import React from 'react';
import Searchbar from './Searchbar';
export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
            <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">Rio</a>
            </div>
                <Searchbar/>
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#">About</a></li>
                </ul>
            </div>
            </div>
        </nav>
        );
    }
}