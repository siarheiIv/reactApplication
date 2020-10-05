import React from 'react';
import { connect } from 'react-redux';
import { searchMovie, updateSearchTerm } from '../../../redux/actions';
import movie_search from './search_bar.scss';

const SearchBar = (props) => {
    const handleSearch = (e) => {
        e.preventDefault();
        props.dispatch(searchMovie(props.searchTerm));
    }
    const handleSearchTerm = (e) => {
        props.dispatch(updateSearchTerm(e.target.value));
    }
    return (
        <div className="movie-search">
            <h1>Find your movie</h1>
            <form className="movie-search__buttons-line" autoComplete="off" onSubmit={(e) => handleSearch(e)}>
                <input type="text" name="movie" className="movie-search__input" onChange={(e) => handleSearchTerm(e)} />
                <input className="button" type="submit" value="Search" />
            </form>
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        movies: store.homePage.movies,
        sortBy: store.homePage.sortBy,
        selectedTabIndex: store.homePage.selectedTabIndex,
        sortedMovies: store.homePage.sortedMovies,
        searchTerm: store.homePage.searchTerm,
    }
};

export default connect(mapStateToProps)(SearchBar);