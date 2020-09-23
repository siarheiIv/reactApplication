import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { store, initialState } from '../../redux/store';
import { getAllFilms } from '../../redux/actions';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import MovieDetails from '../../components/movieDetails/index';
import MovieList from '../../components/movieList/index';

const defaultValues = [
    { img: 'https://images-na.ssl-images-amazon.com/images/I/91Ph%2BuTyyxL._AC_SL1500_.jpg', title: 'Bohemian Rhapsody', year: '2000-11-11', type: 'Crime', runtime: '98', id: 0 },
    { img: 'https://images-na.ssl-images-amazon.com/images/I/61jFTTf9RBL._AC_SL1230_.jpg', title: 'Avatar', year: '2010-12-11', type: 'Documentary', runtime: '120', id: 1 },
    { img: 'https://images-na.ssl-images-amazon.com/images/I/71e3V2Z%2BLjL._AC_SL1125_.jpg', title: 'Sex and the City', year: '2003-09-10', type: 'Comedy', runtime: '107', id: 2 },
    { img: 'https://images-na.ssl-images-amazon.com/images/I/81FVRb43H6L._AC_SY606_.jpg', title: 'Monster House', year: '1998-02-10', type: 'Horror', runtime: '103', id: 3 },
    { img: 'https://www.joblo.com/assets/images/oldsite/posters/images/full/2009-bride_wars-3.jpg', title: 'Bride Wars', year: '2012-08-10', type: 'Comedy', runtime: '99', id: 4 },
    { img: 'https://image.posterlounge.com/images/big/1876082.jpg', title: 'The Godfather', year: '1972-03-08', type: 'Crime', runtime: '96', id: 5 }
];

const mapStateToProps = ({ allFilms }) => {
    return {
        allFilms
    }
};

const HomePage = () => {
    const [filmList, setFilmList] = useState(defaultValues);
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    const [isDetailsPage, setDetailsPage] = useState(false);
    const [currentMovie, setCurrentMovie] = useState({});
    const [sortBy, setSortBy] = useState('date');

    const apiResponse = async () => {
        // const v = await fetch('http://localhost:4000/movies').then((resp) => resp.json()).then(({ data }) => console.log(data));
        const v = await fetch('http://localhost:4000/movies').then((resp) => resp.json()).then(({ data }) => store.dispatch(getAllFilms(data)));
        console.log(initialState);
    }

    // useEffect(() => {
    //     setFilmList(defaultValues);
    //     // setDefaultList(defaultValues);
    //     apiResponse();
    // }, []);

    useEffect(() => {
        apiResponse();
        if (sortBy === 'name') {
            setFilmList(sortFilmsByName(filmList));
        } else if (sortBy === 'date') {
            setFilmList(sortFilmsByYear(filmList));
        }
    }, [sortBy]);

    const sortByTabClick = (e, films) => {
        if (e.target.dataset.tab === 'all') {
            return films;
        } else {
            return films.filter(film => film.type.toLowerCase() === e.target.dataset.tab);
        }
    };

    const sortFilmsByName = (films) => {
        return films.sort((a, b) => { return (a.title > b.title) ? 1 : (a.title < b.title) ? -1 : 0 });
    };

    const sortFilmsByYear = (films) => {
        return films.sort((a, b) => {
            return moment(b.year) - moment(a.year);
        });
    };

    const sortFilmsByGenre = (films) => {
        setFilmList(films);
    };

    const handleTabClick = (e, index) => {
        setSelectedTabIndex(index);
        sortFilmsByGenre(sortByTabClick(e, filmList));
    };

    const handleChange = (e) => {
        if (e.target.options[e.target.selectedIndex].value === 'name') {
            setSortBy('name');
            // sortFilmsByName(filmList)
        } else if (e.target.options[e.target.selectedIndex].value === 'date') {
            setSortBy('date');
            // sortFilmsByYear(filmList)
        }
    };

    const openDetailsPage = (description) => {
        setDetailsPage(true);
        setCurrentMovie(description);
    }

    const closeDetailsPage = () => {
        setDetailsPage(false);
    };

    return (
        <Fragment>
            {!isDetailsPage && <Header />}
            {isDetailsPage && <MovieDetails currentMovie={currentMovie} closeDetailsPage={closeDetailsPage} />}
            <MovieList
                filmList={filmList}
                handleChange={handleChange}
                handleTabClick={handleTabClick}
                openDetailsPage={openDetailsPage}
                selectedTabIndex={selectedTabIndex}
            />
            <Footer />
        </Fragment>
    )
}

export default connect(mapStateToProps)(HomePage);