import React from 'react';
import movie_search from '../styles/movie_search.scss'

const SearchBar = () => {
    return(
        <div className="movie-search">
        <h1>Find your movie</h1>
        <div className="movie-search__buttons-line">
            {/* <div className="movie-search__buttons">
                <span>Search by</span>
                <button className="button">Title</button>
                <button className="button">Genre</button>
            </div> */}
            <input type="text" name="movie" className="movie-search__input" />
            <button className="button">Search</button>
        </div>
    </div>
    )
}

export default SearchBar;