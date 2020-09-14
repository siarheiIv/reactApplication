import React from 'react';
import movie_search from './search_bar.scss';

const SearchBar = () => {
    return (
        <div className="movie-search">
            <h1>Find your movie</h1>
            <div className="movie-search__buttons-line">
                <input type="text" name="movie" className="movie-search__input" />
                <button className="button">Search</button>
            </div>
        </div>
    )
}

export default SearchBar;