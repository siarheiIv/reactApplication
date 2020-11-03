import React, { Fragment } from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import MovieList from '../../components/movieList/index';

const SearchResultPage = (props) => {
    return (
        <Fragment>
            <Header {...props} />
            <MovieList {...props} />
            <Footer />
        </Fragment>
    )
}

export default SearchResultPage;