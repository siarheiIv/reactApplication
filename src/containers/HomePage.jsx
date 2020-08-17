import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MovieList from './MovieList';
import ErrorBoundary from './ErrorBoundary';
import main from '../styles/main';

const HomePage = () => {
    return(
        <div>
            <Header />
            <ErrorBoundary>
                <MovieList />
            </ ErrorBoundary>
            <Footer />
        </div>
    )
}

export default HomePage;