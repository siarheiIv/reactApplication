import React, { useEffect } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { loadAllMovies, sortMovies, setSelectedIndex, sortMoviesByGenre, openAllTab } from '../../redux/actions';
import Tabs from './movieTabs/index';
import MovieFilter from '../movieFilter/index';
import Movie from './movie/index';
import CheckMovie from '../common/index';
import movie_founded from './styles/movie_founded';
import movies_list from './movies_list';

const MovieList = (props) => {

    useEffect(() => {
        props.dispatch(loadAllMovies());
    }, []);

    const sortFilmsByName = (films) => {
        return films.sort((a, b) => { return (a.title > b.title) ? 1 : (a.title < b.title) ? -1 : 0 });
    };

    const sortFilmsByYear = (films) => {
        return films.sort((a, b) => {
            return moment(a.release_date) - moment(b.release_date);
        });
    };

    const sortByTabClick = (e, films) => {
        if (e.target.dataset.tab === 'all') {
            props.dispatch(openAllTab());
        } else {
            props.dispatch(sortMoviesByGenre(e.target.dataset.tab));
        }
    };

    const handleChange = (e) => {
        if (e && e.target.options[e.target.selectedIndex].value === 'name') {
            props.dispatch(sortMovies('name'));
            sortFilmsByName(props.movies);
        } else {
            props.dispatch(sortMovies('date'));
            sortFilmsByYear(props.movies);
        }
    };

    const handleTabClick = (e, index) => {
        props.dispatch(setSelectedIndex(index));
        sortByTabClick(e, props.movies);
    };

    const { openDetailsPage } = props;
    return (
        <main>
            <div className="wrapper">
                <CheckMovie>
                    <div className="sort-line">
                        <Tabs
                            handleTabClick={handleTabClick}
                            selectedTabIndex={props.selectedTabIndex}
                        />
                        <MovieFilter
                            handleChange={handleChange}
                        />
                    </div>
                    <p className="sort-line__movies-num">{`${props.movies && props.sortedMovies.length} movies found`}</p>
                    <div className="movies-list">
                        {
                            props.sortedMovies.length && props.sortedMovies.map(movie => <Movie key={movie.id} description={movie} openDetailsPage={openDetailsPage} />)
                        }
                        {console.log(props.sortedMovies)}
                    </div>
                </CheckMovie>
            </div>
        </main>
    )
}

const mapStateToProps = (store) => {
    return {
        movies: store.homePage.movies,
        sortBy: store.homePage.sortBy,
        selectedTabIndex: store.homePage.selectedTabIndex,
        sortedMovies: store.homePage.sortedMovies,
    }
};

export default connect(mapStateToProps)(MovieList);