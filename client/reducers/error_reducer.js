import { AUTH_ERROR,
		 UPDATE_USER_ERROR,
		 ERROR_RETWEET,
		 USER_FEED_ERROR,
		 HOME_FEED_ERROR } from '../constants/action_type';

export default (state = {}, action) => {
    switch (action.type) {
        case UPDATE_USER_ERROR: return Object.assign({}, state, {error: action.payload})
        case AUTH_ERROR: return Object.assign({}, state, {error: action.payload})
        case HOME_FEED_ERROR: return Object.assign({}, state, {error:action.payload})
        case USER_FEED_ERROR: return Object.assign({}, state, {error: action.payload})
        case ERROR_RETWEET: return state
        default: return state
    }
}
