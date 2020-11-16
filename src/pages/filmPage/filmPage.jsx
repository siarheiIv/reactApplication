import React, { Fragment } from 'react';
import Footer from '../../components/footer/index';
import MovieDetails from '../../components/movieDetails/index';
import MovieList from '../../components/movieList/index';

const FilmPage = (props) => (
        <Fragment>
            <MovieDetails />
            <MovieList {...props} />
            <Footer />
        </Fragment>
);

export default FilmPage;
