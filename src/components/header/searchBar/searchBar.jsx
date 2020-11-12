import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import Router from 'next/router';

const SearchBar = (props) => {
    const router = useRouter();
    const [term, setTerm] = useState(props.searchTerm);

    useEffect(() => {
        setTerm(decodeURI(props.searchTerm));
    }, [props.searchTerm])

    useEffect(() => {
        if (router.asPath === '/') {
            setTerm('');
        }
    }, [router.asPath])

    const handleSearch = (e) => {
        e.preventDefault();
        Router.push(term === '' ? '/' : `/search/${term}`)
    }
    const handleSearchTerm = (e) => {
        setTerm(e.target.value);
    }
    return (
        <div className="movie-search">
            <h1>Find your movie</h1>
            <form className="movie-search__buttons-line" autoComplete="off" onSubmit={(e) => handleSearch(e)}>
                <input type="text" name="movie" value={term} className="movie-search__input" onChange={(e) => handleSearchTerm(e)} />
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