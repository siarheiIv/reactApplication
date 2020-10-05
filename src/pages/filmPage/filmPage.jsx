import React, { Fragment, useState, useEffect } from 'react';
import Footer from '../../components/footer/index';
import MovieDetails from '../../components/movieDetails/index';
import MovieList from '../../components/movieList/index';

const FilmPage = (props) => {
    // const [currentMovie, setCurrentMovie] = useState('');

    // useEffect(() => {
    //     openDetailsPage(description);
    // }, [])

    // const openDetailsPage = (description) => {
    //     console.log(description);
    //     setCurrentMovie(description);
    // }


    return (
        <Fragment>
            {props.currentMovie && <MovieDetails currentMovie={props.currentMovie} />}
            <MovieList
                openDetailsPage={props.openDetailsPage}
            />
            <Footer />
        </Fragment>
    )
}

export default FilmPage;