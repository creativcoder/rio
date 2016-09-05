import { combineReducers } from 'redux';
import LoginReducer from './login_reducer';
import TweetReducer from './tweets_reducer';
import ErrorReducer from './error_reducer';
import SearchReducer from './search_reducer';

const rootReducer = combineReducers({
  login: LoginReducer,
  tweets: TweetReducer,
  error: ErrorReducer,
  search_result: SearchReducer
});

export default rootReducer;
