import { GET_ALL_FILMS_FOR_RENDER, SELECTED_TAB_INDEX, UPDATE_SEARCH_TERM, ADD_MOVIE, UPDATE_MOVIE, OFFSET_COUNTER } from '../actions';

const initialState = {
    movies: [],
    sortedMovies: [],
    sortBy: '',
    selectedTabIndex: 0,
    searchTerm: '',
    filter: '',
    offset: 0,
};

const homePage = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_FILMS_FOR_RENDER:
            return { ...state, movies: state.movies.concat(action.data), sortedMovies: state.sortedMovies.concat(action.data), sortBy: action.sortBy, searchTerm: action.searchTerm, filter: action.filter };
        case SELECTED_TAB_INDEX:
            return { ...state, selectedTabIndex: action.payload };
        case OFFSET_COUNTER:
            console.log(state.offset)
            return { ...state, offset: state.offset + 1 };
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

