import Immutable from 'immutable';
import { AUTH_REQUEST,
      AUTH_SUCCESS,
      AUTH_FAILURE } from '../constants/action_type';

const default_state = {
    authenticated: null,
}

export default (state = Immutable.Map(default_state), action) => {
    switch (action.type) {
        case AUTH_REQUEST: {
            console.log(`ActionRequest: ${action.payload}`);
            return state.set('authenticated', action.payload)
        }
        default: return state
    }
}