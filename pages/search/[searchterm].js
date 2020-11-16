import React from 'react';
import { Provider } from 'react-redux';
import store from '../../src/redux/store';
import HomePage from '../../src/pages/homePage/index';

export default function SearchTerm() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>);
}
