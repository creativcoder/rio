import React from 'react';
import TweetModal from './TweetModal';

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
                <a className="navbar-brand" href="#"><strong>@{this.getUser()?this.getUser().alias:""}</strong></a>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                <TweetModal entities={{type:"tweet", alias: null, recepient:null}}/>
                </ul>
            </div>
            </div>
        </nav>
        );
    }
}
