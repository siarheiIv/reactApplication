// import React from 'react';
// import { Provider } from 'react-redux'
// import { store } from './redux/store';
// import HomePage from './pages/homePage/index';
// import FilmPage from './pages/filmPage/index';

// const App = () => {
//     return (
//         <Provider store={store}>
//             <HomePage />
//             {/* <FilmPage /> */}
//         </Provider>
//     )
// }
// export default App;

import React, { Fragment, useState, useEffect } from 'react';
import { Provider } from 'react-redux'
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { store } from './redux/store';
import HomePage from './pages/homePage/index';
import FilmPage from './pages/filmPage/index';

const App = () => {
    const [currentMovie, setCurrentMovie] = useState('');
    const openDetailsPage = (description) => {
        setCurrentMovie(description);
    }
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path={`/film/${currentMovie.id}`}>
                        <FilmPage openDetailsPage={openDetailsPage} currentMovie={currentMovie} />
                    </Route>
                    <Route path='/'>
                        <HomePage openDetailsPage={openDetailsPage} />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    )
}
export default App;