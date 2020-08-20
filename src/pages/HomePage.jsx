import React from 'react';
import Header from '../components/header/index';
import Footer from '../components/footer/index';
import MovieList from '../components/movieList/index';

const HomePage = () => {
    return(
        <div>
            <Header />
                <MovieList />
            <Footer />
        </div>
    )
}

export default HomePage;