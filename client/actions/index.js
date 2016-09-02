import { OAuth } from 'oauthio-web';

import { AUTH_REQUEST,
         AUTH_SUCCESS,
         AUTH_ERROR,
         POST_TWEET,
         LIKE_TWEET,
         UNLIKE_TWEET,
         RETWEET,
         UNRETWEET,
         ERROR_RETWEET,
         HOME_FEED,
         HOME_FEED_ERROR,
         USER_FEED,
         USER_FEED_ERROR,
         UPDATE_USER,
         UPDATE_USER_ERROR } from '../constants/action_type';

import { home_uri,
         user_uri,
         post_tweet_uri,
         like_uri,
         unlike_uri,
         retweet_uri,
         unRetweet_uri } from '../constants/action_type';

import { browserHistory, router } from 'react-router';
import { store } from '../index';

export const authorize = (pub_key) => {
    OAuth.initialize(pub_key);
    OAuth.popup('twitter', {cache:true}).done((auth_data) => {
        store.dispatch({type: AUTH_SUCCESS, payload: auth_data});
        auth_data.me().done((user)=>{
            store.dispatch({type: UPDATE_USER, payload: user})
        }).fail((err)=>{
            store.dispatch({type: UPDATE_USER_ERROR, payload: err})
        })
        home_timeline();
        browserHistory.push('home');
    }).fail(err=>{store.dispatch({type:AUTH_ERROR, payload:err })});
    return {
        type: AUTH_REQUEST
    }
}

export const home_timeline = () => {
    let home_timeline = store.getState().login.authenticated.get(home_uri);
    home_timeline.done(feed => {
        store.dispatch({type: HOME_FEED, payload: feed })
    }).fail(err=>{
        store.dispatch({type: HOME_FEED_ERROR, payload: err })
    });
}

export const user_timeline = () => {
    let user_timeline = store.getState().login.authenticated.get(user_uri);
    user_timeline.done(feed => {
        store.dispatch({type: USER_FEED, payload: feed })
    }).fail(err=>{
        store.dispatch({type: USER_FEED_ERROR, payload: err })
    });
}

export const postTweet = (new_tweet) => {
    return {
        type: POST_TWEET,
        payload: store.getState().login.authenticated.post(post_tweet_uri, {data: {status: new_tweet} })
    }
}

export const likeTweet = (tweet) => {
    if(tweet.favorited) {
        const payload = store.getState().login.authenticated.post(unlike_uri, {data: {id:tweet.id_str} });
        return {type: UNLIKE_TWEET, payload: payload}
    } else {
        const payload = store.getState().login.authenticated.post(like_uri, {data: {id:tweet.id_str} })
        return {type: LIKE_TWEET, payload: payload}
    }
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
    if (!tweet.retweeted) {
        return {
            type: RETWEET,
            payload: store.getState().login.authenticated.post(retweet_uri(tweet))
        }
    } else {
        return {
            type: UNRETWEET,
            payload: store.getState().login.authenticated.post(unRetweet_uri(tweet))
        }
    }
}
