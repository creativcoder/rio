import React from 'react';

import { store } from '../../index';
import { authorize } from '../../actions/index';
import { connect } from 'react-redux';
import { RIO_PUBLIC_KEY } from '../../constants/config';
import { Router, browserHistory } from 'react-router';

import { bindActionCreators } from 'redux';
import { flex_wrapper, logo_style, login_style } from './style';

const Login = ({authorize}) => {
        return (
        <div className="container">
            <div className="login-screen" style={flex_wrapper}>
                <i className="fa fa-twitter" style={logo_style} aria-hidden="true"></i>
                <h1 style={login_style}>Rio</h1>
                <button type="button" id="login-btn"
                style={login_style}
                className="btn btn-primary" onClick={() => authorize(RIO_PUBLIC_KEY)}>Connect to Twitter!
                </button>
            </div>
        </div>
    );    
}

const mapDispatchToProps = (dispatch) => bindActionCreators({authorize}, dispatch)
export default connect(null, mapDispatchToProps)(Login);
