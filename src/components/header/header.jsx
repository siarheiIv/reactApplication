import React, { useState, useCallback } from 'react';
import SearchBar from './searchBar/searchBar';
import EditMovieModal from '../movieList/editMovieModal/index';
import Link from 'next/link';

const description = {
    genres: [],
    id: Math.random(),
    overview: '',
    poster_path: '',
    release_date: '',
    runtime: '',
    title: '',
    vote_average: '',
};

const Header = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = useCallback(() => {
        setIsModalOpen(!isModalOpen);
    }, [isModalOpen]);

    return (
        <React.Fragment>
            <header className="header">
                <div className="wrapper">
                    <div className="header-line">
                        <Link href="/"><div className="logo">netflixroulette</div></Link>
                        <button className="button button_reverse" onClick={handleClick}>+ ADD MOVIE</button>
                    </div>
                    <SearchBar props={props.props} />
                </div>
            </header>
            {isModalOpen && <EditMovieModal description={description} handleClick={handleClick} />}
        </React.Fragment>
    )
}

export default Header;