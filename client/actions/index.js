import { OAuth } from 'oauthio-web';
import { AUTH_REQUEST,
      AUTH_SUCCESS,
      AUTH_FAILURE } from '../constants/action_type';

export function authorize(pub_key) {
    OAuth.initialize(pub_key);
    let request = OAuth.popup('twitter');
    return {
        type: AUTH_REQUEST,
        payload: request
    }
}
