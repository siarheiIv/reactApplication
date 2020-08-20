import React from 'react';
import SearchBar from './SearchBar';
import header from '../styles/header.scss';

const Header = () => {
    return(
        <header className="header">
        <div className="wrapper">
            <div className="header-line">
                <a href="#" className="logo">netflixroulette</a>
                <button className="button button_reverse">+ ADD MOVIE</button>
            </div>
            <SearchBar />
        </div>
    </header>
    )
}

export default Header;