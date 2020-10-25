import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadAllMovies, setSelectedIndex } from '../../redux/actions';
import Tabs from './movieTabs/index';
import MovieFilter from '../movieFilter/index';
import Movie from './movie/index';
import CheckMovie from '../common/index';
import movie_founded from './styles/movie_founded';
import movies_list from './movies_list';

const MovieList = (props) => {
    const [isBottom, setIsBottom] = useState(false);

    useEffect(() => {
        props.dispatch(loadAllMovies(props.searchTerm, props.sortBy, props.filter, props.offset));
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isBottom) {
            props.dispatch(loadAllMovies(props.searchTerm, props.sortBy, props.filter, props.offset + 9));
            setIsBottom(false);
        }
    }, [isBottom]);

    const handleScroll = () => {
        if ((window.pageYOffset + window.innerHeight + 100) > document.documentElement.scrollHeight) {
            setIsBottom(true);
        }
    };

    const sortByTabClick = (e) => {
        if (e.target.dataset.tab === 'all') {
            props.dispatch(loadAllMovies(props.searchTerm, props.sortBy, '', 0, true));
        } else {
            props.dispatch(loadAllMovies(props.searchTerm, props.sortBy, e.target.dataset.tab, 0, true));
        }
    };

    const handleChange = (e) => {
        if (e && e.target.options[e.target.selectedIndex].value === 'title') {
            props.dispatch(loadAllMovies(props.searchTerm, 'title', props.filter, 0, true));
        } else if (e && e.target.options[e.target.selectedIndex].value === 'date') {
            props.dispatch(loadAllMovies(props.searchTerm, 'date', props.filter, 0, true));
        } else {
            props.dispatch(loadAllMovies(props.searchTerm, 'rating', props.filter, 0, true));
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
                    <p className="sort-line__movies-num">{`${props.movies && props.movies.length} movies found`}</p>
                    <div className="movies-list">
                        {
                            props.movies.length && props.movies.map(movie => <Movie key={movie.id} description={movie} openDetailsPage={openDetailsPage} />)
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
        searchTerm: store.homePage.searchTerm,
        filter: store.homePage.filter,
        offset: store.homePage.offset,
    }
};

export default connect(mapStateToProps)(MovieList);