import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loadAllMovies, updateSearchTerm } from '../../../redux/actions';
import movie_search from './search_bar.scss';

const SearchBar = (props) => {
    const { props: { match: { path } } } = props;
    const [term, setTerm] = useState('');
    console.log(term)
    // useEffect(() => {
    //     setTerm('');
    // }, [])
    const handleSearch = (e) => {
        e.preventDefault();
        props.props.history.push(`/search/Search%20${term}`);
        //props.dispatch(loadAllMovies(path === '/' ? '' : props.searchTerm, props.sortBy, props.filter, props.offset, false, true));
    }
    const handleSearchTerm = (e) => {
        // props.dispatch(updateSearchTerm(e.target.value));
        setTerm(e.target.value);
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
        searchTerm: store.homePage.searchTerm,
        sortBy: store.homePage.sortBy,
        filter: store.homePage.filter,
        offset: store.homePage.offset,
        movies: store.homePage.movies,
    }
};

export default connect(mapStateToProps)(SearchBar);