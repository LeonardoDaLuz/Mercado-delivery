import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


//Utilities for global scope
import '@utils/waitForSeconds';
import '@utils/Mathf'; //importa no escopo global window.mathf
import '@utils/easyOutline';

//redux
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  , document.getElementById('root')
);
