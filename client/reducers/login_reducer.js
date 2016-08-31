import { AUTH_REQUEST,
      AUTH_SUCCESS,
      AUTH_ERROR,
      LOGOUT,
      UPDATE_USER } from '../constants/action_type';

const default_state = {
    authenticated: null,
}

export default (state = default_state, action) => {
    switch (action.type) {
        case AUTH_REQUEST: return state
        case AUTH_SUCCESS: return { authenticated: action.payload }
        case UPDATE_USER: return Object.assign({}, state, {user: action.payload})
        case AUTH_ERROR: return state
        case LOGOUT: { authenticated: null }            
        default: return state
    }
}