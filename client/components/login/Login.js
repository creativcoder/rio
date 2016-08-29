import React from 'react';

import { store } from '../../index';
import { authorize } from '../../actions/index';
import { connect } from 'react-redux';
import { RIO_PUBLIC_KEY } from '../../constants/config';
import { Router, browserHistory } from 'react-router';
import { Checkbox, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Spinner from 'react-spinkit';
import { persistance_enabled } from '../../constants/config';

import { bindActionCreators } from 'redux';
import { flex_wrapper, logo_style, login_style, spinner_style } from './style';

const render_login = () => (<button type="button" id="login-btn"
                style={login_style}
                className="btn btn-primary" onClick={() => authorize(RIO_PUBLIC_KEY)}>Connect to Twitter!
                </button>);

const render_spinner = () => {
    setTimeout(()=>{authorize(RIO_PUBLIC_KEY)}, 4000);
    return (<Spinner style={spinner_style} spinnerName='double-bounce'/>);
}

const Login = ({authorize}) => {
        return (
        <div className="container">
            <div className="login-screen" style={flex_wrapper}>
                <i className="fa fa-twitter" style={logo_style} aria-hidden="true"></i>
                <h1 style={login_style}>Rio</h1>
                {persistance_enabled()?render_spinner():render_login()}
                
            </div>
        </div>
    );    
}

const mapDispatchToProps = (dispatch) => bindActionCreators({authorize}, dispatch)
export default connect(null, mapDispatchToProps)(Login);
