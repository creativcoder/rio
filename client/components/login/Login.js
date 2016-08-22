import React from 'react';
import { RIO_PUBLIC_KEY } from '../../constants/config';
import { authorize } from '../../actions/index';
import { connect } from 'react-redux';
import { flex_wrapper, logo_style, login_style } from './style';

const Login = ({store, dispatch}) => (
            <div className="container">
                <div className="login-screen" style={flex_wrapper}>
                <i className="fa fa-twitter" style={logo_style} aria-hidden="true"></i>
                <h1 style={login_style}>Rio</h1>
                <button type="button"
                    style={login_style}
                    className="btn btn-primary" onClick={ e => {
                        dispatch(authorize(RIO_PUBLIC_KEY, dispatch));}
                    }>Connect to Twitter!</button>
                    </div>
            </div>);

const mapStateToProps = (store) => ({store});
export default connect(mapStateToProps)(Login)