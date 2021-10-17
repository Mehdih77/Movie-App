import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/Store';
import {Provider} from 'react-redux';
// css style react Modal video (adding to singleCards)
import '../node_modules/react-modal-video/css/modal-video.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
