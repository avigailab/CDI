import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import dataStore from './store';

ReactDOM.render(
  <Provider store={dataStore}>
    <App />
  </Provider>
  , document.querySelector('.container'));
