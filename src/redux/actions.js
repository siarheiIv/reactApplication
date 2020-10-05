import { store } from './store';

export const GET_ALL_FILMS = 'GET_ALL_FILMS';
export const SORT_MOVIES = 'SORT_MOVIES';
export const SELECTED_TAB_INDEX = 'SELECTED_TAB_INDEX';
export const SORT_MOVIES_BY_GENRE = 'SORT_MOVIES_BY_GENRE';
export const SEARCH_MOVIE = 'SEARCH_MOVIE';
export const OPEN_ALL_TAB = 'OPEN_ALL_TAB';
export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const ADD_MOVIE = 'ADD_MOVIE';
export const UPDATE_MOVIE = 'UPDATE_MOVIE';

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

export const deleteMovie = data => ({
    type: DELETE_MOVIE,
    payload: data
});

export const addMovie = data => ({
    type: ADD_MOVIE,
    payload: data
});

export const updateMovie = (data, id) => ({
    type: UPDATE_MOVIE,
    payload: data,
    id,
});

export const loadAllMovies = () => async dispatch => {
    try {
        const { data } = await fetch('http://localhost:5000/movies').then((resp) => resp.json());
        store.dispatch(getAllFilms(data));
    } catch (error) {
        console.error();
    }
};