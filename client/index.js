import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, logger())(createStore);
const redux_devtools = window.devToolsExtension && window.devToolsExtension();
export const store = createStoreWithMiddleware(rootReducer, redux_devtools);

render(<Provider store={store}>
	<App/>
	</Provider>, document.querySelector('.app')
);
