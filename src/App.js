import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import store from './redux/store';
import HomePage from './pages/homePage/index';
import FilmPage from './pages/filmPage/index';
import NotFoundPage from './pages/notFound/index';

const App = () => (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path='/' render={(props) => <HomePage props={props} />} />
                    <Route path='/search' render={(props) => <HomePage props={props} />} />
                    <Route path='/film/:id' render={(props) => <FilmPage props={props} />} />
                    <Route path='*' component={NotFoundPage} />
                </Switch>
            </Router>
        </Provider>
);
export default App;
