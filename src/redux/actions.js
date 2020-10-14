import { store } from './store';

export const GET_ALL_FILMS_FOR_RENDER = 'GET_ALL_FILMS_FOR_RENDER';
export const SELECTED_TAB_INDEX = 'SELECTED_TAB_INDEX';
export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const ADD_MOVIE = 'ADD_MOVIE';
export const UPDATE_MOVIE = 'UPDATE_MOVIE';
export const OFFSET_COUNTER = 'OFFSET_COUNTER';

export const getFilmsForRender = (data, searchTerm, sortBy, filter, offset, shouldUpdateState) => ({
    type: GET_ALL_FILMS_FOR_RENDER,
    data,
    searchTerm,
    sortBy,
    filter,
    offset,
    shouldUpdateState
});

export const setSelectedIndex = data => ({
    type: SELECTED_TAB_INDEX,
    payload: data
});
export const setOffsetCounter = () => ({
    type: OFFSET_COUNTER
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

export const loadAllMovies = (title, sortBy, filter, offset, shouldUpdateState) => async dispatch => {
    try {
        console.log(`http://localhost:5000/movies?&limit=9${offset ? `&offset=${offset}` : '&offset=0'}${title ? `&limit=3500&search=${title}&searchBy=title` : ''}${sortBy === 'title' ? '&sortBy=title&sortOrder=asc' : '&sortBy=release_date&sortOrder=asc'}${filter ? `&filter=${filter}` : ''}`)
        const { data } = await fetch(`http://localhost:5000/movies?&limit=9${offset ? `&offset=${offset}` : '&offset=0'}${title ? `&limit=3500&search=${title}&searchBy=title` : ''}${sortBy === 'title' ? '&sortBy=title&sortOrder=asc' : '&sortBy=release_date&sortOrder=asc'}${filter ? `&filter=${filter}` : ''}`)
            .then((resp) => resp.json());
        store.dispatch(getFilmsForRender(data, title, sortBy, filter, offset, shouldUpdateState));
    } catch (error) {
        console.error();
    }
};

export const deleteMovie = (id) => async dispatch => {
    try {
        await fetch(`http://localhost:5000/movies/${id}`, {
            method: 'DELETE',
        });
        store.dispatch(loadAllMovies('', '', ''));
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
