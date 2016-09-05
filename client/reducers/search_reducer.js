import { SEARCH_RESULTS, SEARCH_FAILED} from '../constants/action_type';

export default (state={}, action) => {
	switch(action.type) {
		case SEARCH_RESULTS: return Object.assign({}, state, action.payload);
		case SEARCH_FAILED: return {};
		default: return state
	}
}
