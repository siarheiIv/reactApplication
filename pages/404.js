import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import NotFoundPage from '../src/pages/notFound/index';

export default function Index() {
  return (
        <Provider store={store}>
            <NotFoundPage />
        </Provider>);
}
