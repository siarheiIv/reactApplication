import React, { Fragment } from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import MovieList from '../../components/movieList/index';


const HomePage = (props) => {
    // const apiResponse = async () => {
    //     // const v = await fetch('http://localhost:4000/movies').then((resp) => resp.json()).then(({ data }) => console.log(data));
    //     const v = await fetch('http://localhost:4000/movies').then((resp) => resp.json()).then(({ data }) => store.dispatch(getAllFilms(data)));
    //     console.log(v);
    // }

    // useEffect(() => {
    //     setFilmList(defaultValues);
    //     // setDefaultList(defaultValues);
    //     apiResponse();
    // }, []);

    // useEffect(() => {
    //     apiResponse();
    //     if (sortBy === 'name') {
    //         setFilmList(sortFilmsByName(filmList));
    //     } else if (sortBy === 'date') {
    //         setFilmList(sortFilmsByYear(filmList));
    //     }
    // }, [sortBy]);

    // const sortByTabClick = (e, films) => {
    //     if (e.target.dataset.tab === 'all') {
    //         return films;
    //     } else {
    //         return films.filter(film => film.type.toLowerCase() === e.target.dataset.tab);
    //     }
    // };

    // const sortFilmsByName = (films) => {
    //     return films.sort((a, b) => { return (a.title > b.title) ? 1 : (a.title < b.title) ? -1 : 0 });
    // };

    // const sortFilmsByYear = (films) => {
    //     return films.sort((a, b) => {
    //         return moment(b.year) - moment(a.year);
    //     });
    // };

    // const sortFilmsByGenre = (films) => {
    //     setFilmList(films);
    // };

    // const handleTabClick = (e, index) => {
    //     setSelectedTabIndex(index);
    //     sortFilmsByGenre(sortByTabClick(e, filmList));
    // };

    // const handleChange = (e) => {
    //     if (e.target.options[e.target.selectedIndex].value === 'name') {
    //         setSortBy('name');
    //         // sortFilmsByName(filmList)
    //     } else if (e.target.options[e.target.selectedIndex].value === 'date') {
    //         setSortBy('date');
    //         // sortFilmsByYear(filmList)
    //     }
    // };

    return (
        <Fragment>
            <Header />
            <MovieList
                openDetailsPage={props.openDetailsPage}
            />
            <Footer />
        </Fragment>
    )
}

export default HomePage;