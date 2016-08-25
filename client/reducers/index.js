import { combineReducers } from 'redux';
import LoginReducer from './login_reducer';
import TweetReducer from './tweets_reducer';

const rootReducer = combineReducers({
  login: LoginReducer,
  tweets: TweetReducer 
});

export default rootReducer;
