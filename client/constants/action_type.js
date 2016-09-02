// Login ActionTypes
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR';
// Home ActionTypes
export const POST_TWEET = 'POST_TWEET';
export const LIKE_TWEET = 'LIKE_TWEET';
export const UNLIKE_TWEET = 'UNLIKE_TWEET';
export const RETWEET = 'RETWEET';
export const UNRETWEET = 'UNRETWEET';
export const HOME_FEED = 'HOME_FEED';
export const HOME_FEED_ERROR = 'HOME_FEED_ERROR';
export const USER_FEED = 'USER_FEED';
export const USER_FEED_ERROR = 'USER_FEED_ERROR';
export const ERROR_RETWEET = 'ERROR_RETWEET';
// API endpoints
export const home_uri = 'https://api.twitter.com/1.1/statuses/home_timeline.json';
export const user_uri = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
export const post_tweet_uri = 'https://api.twitter.com/1.1/statuses/update.json';
export const like_uri = 'https://api.twitter.com/1.1/favorites/create.json';
export const unlike_uri = 'https://api.twitter.com/1.1/favorites/destroy.json';
export const retweet_uri = (tweet) => `https://api.twitter.com/1.1/statuses/retweet/${tweet.id_str}.json`;
export const unRetweet_uri = (tweet) => `https://api.twitter.com/1.1/statuses/unretweet/${tweet.id_str}.json`;
