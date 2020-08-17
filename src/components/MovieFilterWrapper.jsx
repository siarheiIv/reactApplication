import React from 'react';
import MovieFilter from './MovieFilter';

const MovieFilterWrapper = () => {
    return(
        <div>
            <label htmlFor="film-sorting">Sort by </label>
            <MovieFilter />
        </div>
    )
}

export default MovieFilterWrapper;