import Immutable from 'immutable';
import { AUTH_REQUEST,
      AUTH_SUCCESS,
      AUTH_FAILURE } from '../constants/action_type';

// The default store/state of Rio
const default_state = {
    authenticated: false,
    loading: false,
    error_code: 0
}

// The root reducer
export default (state = Immutable.Map(default_state), action) => {
    switch (action.type) {
        case AUTH_REQUEST: {
            console.log(`Action: ${action.payload}`);
            return state.set('loading', action.payload)
        }
        case AUTH_SUCCESS: {
            console.log(`Action: ${action.payload}`);
            return state.set('profile', action.payload)
        }
        case AUTH_FAILURE: {
            console.log(`Action: ${action.payload}`);
            return state.set('error_code', action.err_no)
        }
        default: return state
    }
}