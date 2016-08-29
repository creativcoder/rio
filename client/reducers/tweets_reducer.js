import { TWITTER_FEED,
		 POST_TWEET,
		 RETWEET,
		 LIKE_TWEET,
		 ERROR_RETWEET } from '../constants/action_type';

export default function(state=[], action) {
	switch(action.type) {
		case TWITTER_FEED: return action.payload
		case RETWEET: return [action.payload, ...state]
		case POST_TWEET: return [action.payload, ...state]
		case LIKE_TWEET: return [action.payload, ...state]
		case ERROR_RETWEET: return state	
		default: return state;
	}
}