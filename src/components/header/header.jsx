import React from 'react';
import SearchBar from './searchBar/searchBar';
import NewMovieModal from './newMovieModal/index';
import header from './header.scss';

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            isModalOpen: false,
        }
    }

    handleClick = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        })
    }

    render() {
        const { isModalOpen } = this.state;
        return(
            <React.Fragment>
                <header className="header">
                    <div className="wrapper">
                        <div className="header-line">
                            <a href="#" className="logo">netflixroulette</a>
                            <button className="button button_reverse" onClick={this.handleClick}>+ ADD MOVIE</button>
                        </div>
                        <SearchBar />
                    </div>
                </header>
                {isModalOpen && <NewMovieModal handleClick={this.handleClick} />}
            </React.Fragment>       
        )
    }
}

export default Header;