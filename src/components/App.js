import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>
);

export default App;
