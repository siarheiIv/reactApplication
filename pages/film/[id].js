import React from 'react';
import { Provider } from 'react-redux';
import store from '../../src/redux/store';
import FilmPage from '../../src/pages/filmPage/index';

export default function MoviePage() {
  return (
        <Provider store={store}>
            <FilmPage />
        </Provider>);
}
