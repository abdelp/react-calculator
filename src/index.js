import React from 'react';
import ReactDOM from 'react-dom';
import './styles/scss/index.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import Big from 'big.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
