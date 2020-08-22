import React from 'react';
import SearchBar from './components/searchBar';
import header from './header.scss';

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