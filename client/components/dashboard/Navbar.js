import React from 'react';
import TweetModal from './TweetModal';
import Spinner from 'react-spinkit';
import {Glyphicon} from 'react-bootstrap';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.getUser = this.getUser.bind(this);
    }
    getUser() {
        return this.props.user;
    }
    render() {
        return (
            <nav className="navbar navbar-default">
            <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="#"><strong>{this.getUser()?'@'+this.getUser().alias:<Spinner spinnerName="wave" />}</strong></a>
            </div>
                <ul style={nav_style} className="nav navbar-nav navbar-right">
                <TweetModal glyph="send" entities={{type:"tweet", alias: null, recepient:null}}/>
                </ul>
            </div>
            
        </nav>
        );
    }
}

const nav_style = {
    padding: '10px',
    marginTop: '7px',
    marginRight: '1px',
}