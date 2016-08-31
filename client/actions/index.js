import { OAuth } from 'oauthio-web';

// Action strings
import { AUTH_REQUEST,
         AUTH_SUCCESS,
         POST_TWEET,
         LIKE_TWEET,
         RETWEET,
         ERROR_RETWEET,
         HOME_FEED,
         USER_FEED,
         UPDATE_USER } from '../constants/action_type';

// API endpoints
import { home_uri,
         user_uri,
         post_tweet_uri,
         like_uri,
         retweet_uri } from '../constants/action_type';

import { browserHistory, router } from 'react-router';
import { store } from '../index';

export const authorize = (pub_key) => {
    OAuth.initialize(pub_key);
    OAuth.popup('twitter', {cache:true}).then((auth_data) => {
    auth_data.me().then((user)=>{
        store.dispatch({type: UPDATE_USER, payload: user})
    })
    store.dispatch({type: AUTH_SUCCESS, payload: auth_data});
    browserHistory.push('home');
    home_timeline();
    });
    return {
        type: AUTH_REQUEST
    }
}

export const home_timeline = () => {
    store.dispatch({
        type: HOME_FEED,
        payload: store.getState().login.authenticated.get(home_uri)
    })
}

export const user_timeline = () => {
    store.dispatch({
        type: USER_FEED,
        payload: store.getState().login.authenticated.get(user_uri)
    })
}

export const postTweet = (new_tweet) => {
    return {
        type: POST_TWEET,
        payload: store.getState().login.authenticated.post(post_tweet_uri, {data: {status: new_tweet} })
    }
}

export const likeTweet = (id) => {
    console.log(id);
    const liked_tweet = store.getState().login.authenticated.post(like_uri, {data: {id} })
    return { type:LIKE_TWEET, payload: liked_tweet }
};

export const reply = (recepient_id, reply) => {
    const replied_tweet = store.getState().login.authenticated.post(post_tweet_uri,
    { 
        data: {
            status: reply,
            in_reply_to_status_id: recepient_id 
        }
    })
}

export const retweet = (tweet) => {
    if (tweet.retweeted===false) {
        return {
            type: RETWEET,
            payload: store.getState().login.authenticated.post(retweet_uri(tweet))
        }
    } else {
        return {
            type: ERROR_RETWEET
        }
    }
}

