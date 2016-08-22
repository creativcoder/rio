import { OAuth } from 'oauthio-web';
import { AUTH_REQUEST,
      AUTH_SUCCESS,
      AUTH_FAILURE } from '../constants/action_type';

export function authorize(pub_key, dispatch) {
    OAuth.initialize(pub_key);
    OAuth.popup('twitter')
        .done(function(result) {
            result.me().done(function(user_details){
                dispatch(auth_success(user_details));
        })
    })
    .fail(function (err) {
        dispatch(auth_failed(err));
        });
    // We render a progress screen till the request complete and AUTH_SUCCESS.
    return {
        type: AUTH_REQUEST,
        payload: true
    }
}

export function auth_failed(reason) {
    return {
        type: AUTH_FAILURE,
        payload: reason
    }
}

export function auth_success(credentials) {
    return {
        type: AUTH_SUCCESS,
        payload: credentials
    }
}