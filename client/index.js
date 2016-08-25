import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

render(
	<Provider store={createStoreWithMiddleware(rootReducer)}>
	<App/></Provider>, document.getElementById('app'));