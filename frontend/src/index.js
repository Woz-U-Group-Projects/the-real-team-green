import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
=======
import { Provider } from 'react-redux'
import store from './store.js'
>>>>>>> main
import './bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
<<<<<<< HEAD
  <React.StrictMode>
    <App />
  </React.StrictMode>,
=======
  <Provider store={store}>
    <App />
  </Provider>,
>>>>>>> main
  document.getElementById('root')
);


reportWebVitals();
