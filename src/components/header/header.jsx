import React, { useState, useCallback } from 'react';
import SearchBar from './searchBar/searchBar';
import EditMovieModal from '../movieList/editMovieModal/index';
import header from './header.scss';

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = useCallback(() => {
        setIsModalOpen(!isModalOpen);
    }, [isModalOpen]);

    return (
        <React.Fragment>
            <header className="header">
                <div className="wrapper">
                    <div className="header-line">
                        <a href="#" className="logo">netflixroulette</a>
                        <button className="button button_reverse" onClick={handleClick}>+ ADD MOVIE</button>
                    </div>
                    <SearchBar />
                </div>
            </header>
            {isModalOpen && <EditMovieModal handleClick={handleClick} />}
        </React.Fragment>
    )
}

export default Header;