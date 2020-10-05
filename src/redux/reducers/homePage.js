import { GET_ALL_FILMS, SORT_MOVIES, SELECTED_TAB_INDEX, SORT_MOVIES_BY_GENRE, SEARCH_MOVIE, UPDATE_SEARCH_TERM, DELETE_MOVIE, ADD_MOVIE, OPEN_ALL_TAB, UPDATE_MOVIE } from '../actions';

const initialState = {
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
        case GET_ALL_FILMS:
            return { ...state, movies: action.payload, sortedMovies: action.payload };
        case SORT_MOVIES:
            return { ...state, sortBy: action.payload };
        case SELECTED_TAB_INDEX:
            return { ...state, selectedTabIndex: action.payload };
        case SORT_MOVIES_BY_GENRE:
            return { ...state, sortedMovies: state.movies.filter(film => film.genres.some(v => v.toLowerCase() === action.payload)) };
        case OPEN_ALL_TAB:
            return { ...state, sortedMovies: state.movies };
        case SEARCH_MOVIE:
            return { ...state, sortedMovies: state.movies.filter(film => film.title.toLowerCase().indexOf(action.payload.toLowerCase()) > -1) };
        case UPDATE_SEARCH_TERM:
            return { ...state, searchTerm: action.payload };
        case DELETE_MOVIE:
            return { ...state, movies: state.movies.filter(movie => movie.id !== action.payload), sortedMovies: state.sortedMovies.filter(movie => movie.id !== action.payload) };
        case ADD_MOVIE:
            return { ...state, movies: [...state.movies, action.payload], sortedMovies: [...state.sortedMovies, action.payload] };
        case UPDATE_MOVIE:
            const updatedList = state.sortedMovies.map(movie => movie.id === action.id ? action.payload : movie)
            return { ...state, movies: updatedList, sortedMovies: updatedList };
        default:
            return state;
    }
};

export default homePage;

