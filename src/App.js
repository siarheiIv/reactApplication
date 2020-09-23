import React from 'react';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import HomePage from './pages/homePage/index';
import FilmPage from './pages/filmPage/index';

const App = () => {
    return (
        <Provider store={store}>
            <HomePage />
            {/* <FilmPage /> */}
        </Provider>
    )
}
export default App;