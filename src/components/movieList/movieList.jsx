import React from 'react';
import Tabs from './movieTabs/index';
import MovieFilter from '../movieFilter/index';
import Movie from './movie/index';
import CheckMovie from '../common/index';
import movie_founded from './styles/movie_founded';
import movies_list from './movies_list';

class MovieList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { filmList, handleChange, handleTabClick, selectedTabIndex } = this.props;
        return (
            <main>
                <div className="wrapper">
                    <CheckMovie>
                        <div className="sort-line">
                            <Tabs
                                handleTabClick={handleTabClick}
                                selectedTabIndex={selectedTabIndex}
                            />
                            <MovieFilter
                                handleChange={handleChange}
                            />
                        </div>
                        <p className="sort-line__movies-num">{`${filmList.length} movies found`}</p>
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
}

export default MovieList;