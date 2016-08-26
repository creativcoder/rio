import { OAuth } from 'oauthio-web';
import { AUTH_REQUEST,
         POST_TWEET,
         LIKE_TWEET,
         RETWEET,
         TWITTER_FEED } from '../constants/action_type';
import { browserHistory } from 'react-router';
import { store } from '../index';

export const authorize = (pub_key) => {
    OAuth.initialize(pub_key);
    let request = OAuth.popup('twitter');
    setTimeout(()=>{
        browserHistory.push('dashboard');
        user_timeline(store);
        }, 8000);
    return {
        type: AUTH_REQUEST,
        payload: request
    }
}

export const user_timeline = (store) => {
    let tweets = store.getState().login.authenticated.get('https://api.twitter.com/1.1/statuses/home_timeline.json');
    store.dispatch({
        type: TWITTER_FEED,
        payload: tweets
    })
}

export const postTweet = () => {
    console.log('Received Tweet action');
    return {
        type: POST_TWEET,
    // TODO
        payload: null
    }
}

export const likeTweet = () => ({ type:LIKE_TWEET, payload: null });
export const retweet = () => ({ type:RETWEET, payload: null });
