import { GET_ALL_FILMS_FOR_RENDER, SORT_MOVIES, SELECTED_TAB_INDEX, SORT_MOVIES_BY_GENRE, SEARCH_MOVIE, UPDATE_SEARCH_TERM, ADD_MOVIE, OPEN_ALL_TAB, UPDATE_MOVIE, GET_ALL_FILMS } from '../actions';

const initialState = {
    wholeMoviesList: [],
    movies: [],
    sortedMovies: [],
    sortBy: 'date',
    selectedTabIndex: 0,
    searchTerm: '',
    options: {
        // filter: [],
        // limit: 9,
        // offset: 0,
        // search: null,
        // searchBy: SEARCH_BY.TITLE,
        sortBy: 'release_date',
        // sortOrder: SORT_ORDER.ASC,
        totalAmount: 0,
    },
};

const homePage = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_FILMS_FOR_RENDER:
            return { ...state, movies: action.payload, sortedMovies: action.payload };
        case GET_ALL_FILMS:
            return { ...state, wholeMoviesList: action.payload };
        case SORT_MOVIES:
            return { ...state, sortBy: action.payload };
        case SELECTED_TAB_INDEX:
            return { ...state, selectedTabIndex: action.payload };
        case SORT_MOVIES_BY_GENRE:
            return { ...state, sortedMovies: state.movies.filter(film => film.genres.some(v => v.toLowerCase() === action.payload)) };
        case OPEN_ALL_TAB:
            return { ...state, sortedMovies: state.movies };
        case SEARCH_MOVIE:
            return { ...state, sortedMovies: state.wholeMoviesList.filter(film => film.title.toLowerCase().indexOf(action.payload.toLowerCase()) > -1), movies: state.wholeMoviesList.filter(film => film.title.toLowerCase().indexOf(action.payload.toLowerCase()) > -1) };
        case UPDATE_SEARCH_TERM:
            return { ...state, searchTerm: action.payload };
        case ADD_MOVIE:
            return { ...state, movies: [action.payload, ...state.movies], sortedMovies: [action.payload, ...state.sortedMovies] };
        case UPDATE_MOVIE:
            const updatedList = state.sortedMovies.map(movie => movie.id === action.id ? action.payload : movie)
            return { ...state, movies: updatedList, sortedMovies: updatedList };
        default:
            return state;
    }
};

export default homePage;

