import React from 'react';

import { authorize } from '../../actions/index';
import { connect } from 'react-redux';
import { RIO_PUBLIC_KEY, persistance_enabled } from '../../constants/config';
import { Router, browserHistory } from 'react-router';
import { Checkbox, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Spinner from 'react-spinkit';

import { bindActionCreators } from 'redux';
import { flex_wrapper, logo_style, login_style, spinner_style } from './style';

const render_login = () => (
    <div style={login_style}>
    <p>You are connected now</p>
    <button type="button" id="login-btn"
                className="btn btn-primary" onClick={() => authorize(RIO_PUBLIC_KEY)}>Connect to Twitter!
                </button>
                </div>);

const not_connected = () => {
    return (<div style={login_style}>
    <p>Um, looks like you are not connected!</p>
    <button type="button" id="login-btn"
        className="btn btn-primary" onClick={() => {
            if(navigator.onLine){
                authorize(RIO_PUBLIC_KEY);
            } else {
                return false;
            }
        }}>Connect to Twitter!
    </button>
    </div>);
}

const render_network_error = () => {
    return (<p style={login_style}>Um, looks like you are not connected!</p>);
}

const render_spinner = () => {
    setTimeout(()=>{authorize(RIO_PUBLIC_KEY)}, 4000);
    return (
        <div style={spinner_style}>
        <p>Logging you in...</p>
        <Spinner style={spinner_style} spinnerName='double-bounce'/>
        </div>);
}

const prepare_login = () => {
    if (persistance_enabled()) {
        return render_spinner();
    } else {
        render_login();
    }
}

const Login = ({authorize}) => {
        return (
        <div className="container">
            <div className="login-screen" style={flex_wrapper}>
                <i className="fa fa-twitter" style={logo_style} aria-hidden="true"></i>
                <h1 style={login_style}>Rio</h1>
                {navigator.onLine?prepare_login():not_connected()}
            </div>
        </div>
    );    
}

const mapDispatchToProps = (dispatch) => bindActionCreators({authorize}, dispatch)
export default connect(null, mapDispatchToProps)(Login);
