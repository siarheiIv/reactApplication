import React from 'react';
import MovieFilter from './components/movieFilter';
import sort_line from './sort_line';

const MovieFilterWrapper = () => {
    return(
        <div>
            <label htmlFor="film-sorting">Sort by </label>
            <MovieFilter />
        </div>
    )
}

export default MovieFilterWrapper;