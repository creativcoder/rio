import React from 'react';
import { RIO_PUBLIC_KEY } from '../../constants/config';
import { authorize } from '../../actions/index';
import { connect } from 'react-redux';
import Dashboard from '../dashboard/Dashboard';

import { bindActionCreators } from 'redux';
import { flex_wrapper, logo_style, login_style } from './style';

const Login = ({login, authorize}) => {
    if (login.authenticated) {
        return <Dashboard/>;
    } else {
        return (
            <div className="container">
                <div className="login-screen" style={flex_wrapper}>
                <i className="fa fa-twitter" style={logo_style} aria-hidden="true"></i>
                <h1 style={login_style}>Rio</h1>
                <button type="button"
                    style={login_style}
                    className="btn btn-primary" onClick={ e => {
                        console.log(login.get('authenticated'));
                        authorize(RIO_PUBLIC_KEY);
                        }
                    }>Connect to Twitter!</button>
                    </div>
            </div>
        );    
    }
}

const mapStateToProps = ({login}) => ({login});
const mapDispatchToProps = (dispatch) => bindActionCreators({authorize}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Login);