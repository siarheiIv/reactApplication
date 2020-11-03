import React, { Fragment } from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import NoMoviesFound from '../../components/movieList/noMoviesFound/index';
import MovieList from '../../components/movieList/index';

const NoMoviesFoundPage = (props) => {
    return (
        <Fragment>
            <Header {...props} />
            <MovieList {...props} />
            <NoMoviesFound />
            <Footer />
        </Fragment>
    )
}

export default NoMoviesFoundPage;