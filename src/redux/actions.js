import { store } from './store';

export const GET_ALL_FILMS_FOR_RENDER = 'GET_ALL_FILMS_FOR_RENDER';
export const GET_ALL_FILMS = 'GET_ALL_FILMS';
export const SORT_MOVIES = 'SORT_MOVIES';
export const SELECTED_TAB_INDEX = 'SELECTED_TAB_INDEX';
export const SORT_MOVIES_BY_GENRE = 'SORT_MOVIES_BY_GENRE';
export const SEARCH_MOVIE = 'SEARCH_MOVIE';
export const OPEN_ALL_TAB = 'OPEN_ALL_TAB';
export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const ADD_MOVIE = 'ADD_MOVIE';
export const UPDATE_MOVIE = 'UPDATE_MOVIE';

export const getFilmsForRender = (response) => ({
    type: GET_ALL_FILMS_FOR_RENDER,
    payload: response,
});

export const getAllFilms = (response) => ({
    type: GET_ALL_FILMS,
    payload: response,
});

export const sortMovies = data => ({
    type: SORT_MOVIES,
    payload: data
});

export const setSelectedIndex = data => ({
    type: SELECTED_TAB_INDEX,
    payload: data
});

export const sortMoviesByGenre = data => ({
    type: SORT_MOVIES_BY_GENRE,
    payload: data
});

export const openAllTab = data => ({
    type: OPEN_ALL_TAB,
    payload: data
});

export const searchMovie = data => ({
    type: SEARCH_MOVIE,
    payload: data
});

export const updateSearchTerm = data => ({
    type: UPDATE_SEARCH_TERM,
    payload: data
});

export const pushMovieIntoList = data => ({
    type: ADD_MOVIE,
    payload: data
});

export const updateMovieInList = (data, id) => ({
    type: UPDATE_MOVIE,
    payload: data,
    id,
});

export const loadAllMovies = () => async dispatch => {
    try {
        const { data } = await fetch('http://localhost:5000/movies').then((resp) => resp.json());
        store.dispatch(getFilmsForRender(data));
    } catch (error) {
        console.error();
    }
};

export const deleteMovie = (id) => async dispatch => {
    try {
        await fetch(`http://localhost:5000/movies/${id}`, {
            method: 'DELETE',
        });
        store.dispatch(loadAllMovies());
    } catch (error) {
        console.error();
    }
};

export const addMovie = (newMovie) => async dispatch => {
    try {
        const newMovieObject = await fetch('http://localhost:5000/movies', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newMovie)
        }).then(response => response.json());
        store.dispatch(pushMovieIntoList(newMovieObject));
    } catch (error) {
        console.error();
    }
};

export const updateMovie = (data, id) => async dispatch => {
    try {
        const editedMovie = await fetch(`http://localhost:5000/movies/`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...data, id })
        }).then(response => response.json());
        store.dispatch(updateMovieInList(editedMovie, editedMovie.id));
    } catch (error) {
        console.error();
    }
};

export const searchMovieApi = (title) => async dispatch => {
    try {
        const { data } = await fetch('http://localhost:5000/movies?limit=3500').then((resp) => resp.json());
        store.dispatch(getAllFilms(data));
        store.dispatch(searchMovie(title));
    } catch (error) {
        console.error();
    }
}