import React from 'react';
import TweetModal from './TweetModal';
import Spinner from 'react-spinkit';
import {Glyphicon, Popover, ButtonToolbar, OverlayTrigger, Button } from 'react-bootstrap';

const popoverBottom = (
  <Popover id="popover-positioned-bottom" title="Hi!">
    <Button onClick={()=>{
        OAuth.clearCache();
    }} bsStyle="info">Logout</Button>
  </Popover>
);

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {toggle_profile: false};
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
            <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBottom}>
                <a className="navbar-brand" href="#">
                <strong>
                {this.getUser()?'@'+this.getUser().alias:<Spinner spinnerName="wave" />}
                </strong>
                </a>
            </OverlayTrigger>
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