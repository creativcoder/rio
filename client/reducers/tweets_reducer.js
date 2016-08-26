import { TWITTER_FEED } from '../constants/action_type';

export default function(state=[], action) {
	switch(action.type) {
		case TWITTER_FEED: return action.payload;
		default: return state;
	}
}
