import React from 'react';
import MovieFilter from './MovieFilter';
import sort_line from '../sort_line.scss';

const MovieFilterWrapper = () => {
    return(
        <div>
            <label htmlFor="film-sorting">Sort by </label>
            <MovieFilter />
        </div>
    )
}

export default MovieFilterWrapper;