import React, { useEffect } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { loadAllMovies, setSelectedIndex, setOffsetCounter } from '../../redux/actions';
import Tabs from './movieTabs/index';
import MovieFilter from '../movieFilter/index';
import Movie from './movie/index';
import CheckMovie from '../common/index';
import movie_founded from './styles/movie_founded';
import movies_list from './movies_list';

const MovieList = (props) => {

    useEffect(() => {
        props.dispatch(loadAllMovies(props.searchTerm, props.sortBy, props.filter, props.offset));
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        if ((window.pageYOffset + window.innerHeight + 100) > document.documentElement.scrollHeight) {
            // props.dispatch(setOffsetCounter());
            props.dispatch(loadAllMovies(props.searchTerm, props.sortBy, props.filter, props.offset + 1));
            console.log(props)
        }
    };

    const sortFilmsByName = (films) => {
        return films.sort((a, b) => { return (a.title > b.title) ? 1 : (a.title < b.title) ? -1 : 0 });
    };

    const sortFilmsByYear = (films) => {
        return films.sort((a, b) => {
            return moment(a.release_date) - moment(b.release_date);
        });
    };

    const sortByTabClick = (e) => {
        if (e.target.dataset.tab === 'all') {
            props.dispatch(loadAllMovies(props.searchTerm, props.sortBy, '', props.offset));
        } else {
            props.dispatch(loadAllMovies(props.searchTerm, props.sortBy, e.target.dataset.tab, props.offset));
        }
    };

    const handleChange = (e) => {
        if (e && e.target.options[e.target.selectedIndex].value === 'title') {
            props.dispatch(loadAllMovies(props.searchTerm, 'title', props.filter, props.offset));
            sortFilmsByName(props.movies);
        } else {
            props.dispatch(loadAllMovies(props.searchTerm, 'date', props.filter, props.offset));
            sortFilmsByYear(props.movies);
        }
    };

    const handleTabClick = (e, index) => {
        props.dispatch(setSelectedIndex(index));
        sortByTabClick(e);
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
        searchTerm: store.homePage.searchTerm,
        filter: store.homePage.filter,
        offset: store.homePage.offset,
    }
};

export default connect(mapStateToProps)(MovieList);