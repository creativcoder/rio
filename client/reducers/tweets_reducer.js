import { TWITTER_FEED,
		 POST_TWEET,
		 RETWEET,
		 LIKE_TWEET,
		 HOME_FEED,
		 USER_FEED } from '../constants/action_type';

export default function(state=[], action) {
	switch(action.type) {
		case HOME_FEED: return action.payload
		case USER_FEED: return action.payload
		case POST_TWEET: return [action.payload, ...state]
		case LIKE_TWEET: return [action.payload, ...state]
		case RETWEET: return [action.payload, ...state]
		default: return state;
	}
}
