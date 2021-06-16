import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './store/reducers';
import promise from 'redux-promise';
import '@babel/polyfill';

import App from './containers/App';
import 'swiper/swiper-bundle.min.css';
// Import main sass file to apply global styles
import './static/sass/style.scss';
import { loadState } from './store/local_storage/localStorage';
import rootReducer from './store/reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const app = (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
