// Login ActionTypes
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';
export const UPDATE_USER = 'UPDATE_USER';
// Home ActionTypes
export const POST_TWEET = 'POST_TWEET';
export const LIKE_TWEET = 'LIKE_TWEET';
export const RETWEET = 'RETWEET';
export const TWITTER_FEED = 'TWITTER_FEED';
export const ERROR_RETWEET = 'ERROR_RETWEET';
// API endpoints
export const feed_uri = 'https://api.twitter.com/1.1/statuses/home_timeline.json';
export const post_tweet_uri = 'https://api.twitter.com/1.1/statuses/update.json';
export const like_uri = 'https://api.twitter.com/1.1/favorites/create.json';
export const retweet_uri = (tweet) => `https://api.twitter.com/1.1/statuses/retweet/${tweet.id_str}.json`;
