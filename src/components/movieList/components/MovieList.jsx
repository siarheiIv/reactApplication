import React from 'react';
import Tabs from '../../movieTabs/index';
import MovieFilter from '../../movieFilter/components/MovieFilterWrapper';
import Movie from './Movie';
import CheckMovie from '../../common/CheckMovie';
import movie_founded from '../styles/movie_founded.scss';
import movies_list from '../styles/movies_list';

const MovieList = () => {

    const filmList = [{img: 'https://via.placeholder.com/300x400.jpg?text=Movie%20Cover', title: 'Bohemian Rapsody', year: 2000, type: 'Action & Adventure', id: 0 }, {img: 'https://via.placeholder.com/300x400.jpg?text=Movie%20Cover', title: 'Bohemian Rapsody', year: 2000, type: 'Action & Adventure', id: 1 }, {img: 'https://via.placeholder.com/300x400.jpg?text=Movie%20Cover', title: 'Bohemian Rapsody', year: 2000, type: 'Action & Adventure', id: 2 }, {img: 'https://via.placeholder.com/300x400.jpg?text=Movie%20Cover', title: 'Bohemian Rapsody', year: 2000, type: 'Action & Adventure', id: 3 }, {img: 'https://via.placeholder.com/300x400.jpg?text=Movie%20Cover', title: 'Bohemian Rapsody', year: 2000, type: 'Action & Adventure', id: 4 }, {img: 'https://via.placeholder.com/300x400.jpg?text=Movie%20Cover', title: 'Bohemian Rapsody', year: 2000, type: 'Action & Adventure', id: 5 } ]

    return(
        <main>
            <div className="wrapper">
                <CheckMovie>
                    <div className="sort-line">
                        <Tabs />
                        <MovieFilter />
                    </div>
                    <p className="sort-line__movies-num">
                            7 movies found
                    </p>
                    <div className="movies-list">
                        {
                            filmList.map(movie => <Movie key={movie.id} description={movie} />)
                        }
                    </div>
                    {/* <div className="no-movies">
                        <p className="no-movies__title">No films found</p>
                    </div> */}
                </CheckMovie>
            </div>
        </main> 
    )
}

export default MovieList;