import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { PersistGate } from 'redux-persist/integration/react'
import reducers from './store/reducers';
import promise from 'redux-promise';
import { persistor, store } from './store/local_storage/store'
import '@babel/polyfill';

import App from './containers/App';
import 'swiper/swiper-bundle.min.css';
// Import main sass file to apply global styles
import './static/sass/style.scss';

const app = (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
