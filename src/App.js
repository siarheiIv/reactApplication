import React from 'react';
import { Provider } from 'react-redux'
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { store } from './redux/store';
import HomePage from './pages/homePage/index';
import FilmPage from './pages/filmPage/index';
import NotFoundPage from './pages/notFound/index';
import SearchResultPage from './pages/searchPage/index';
import NoMoviesFoundPage from './pages/noMoviesFound/index';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path='/' render={props => <HomePage props={props} />} />
                    <Route path='/search' render={props => <HomePage props={props} />} />
                    {/* <Route path='/search' render={props => <SearchResultPage props={props} />} /> */}
                    <Route path='/film/:id' children={props => <FilmPage props={props} />} />
                    {/* <Route path='/no-movies-found' render={props => <NoMoviesFoundPage props={props} />} /> */}
                    <Route path='*' component={NotFoundPage} />
                </Switch>
            </Router>
        </Provider>
    )
}
export default App;