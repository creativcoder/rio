import { AUTH_REQUEST,
      AUTH_SUCCESS,
      AUTH_FAILURE,
      LOGOUT,
      TWITTER_FEED } from '../constants/action_type';

const default_state = {
    authenticated: null,
}

export default (state = default_state, action) => {
    switch (action.type) {
        case AUTH_REQUEST: {
            return { authenticated: action.payload }
        }
        case LOGOUT: {
            return state.set('authenticated', null);
        }
        default: return state
    }
}