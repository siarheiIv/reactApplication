import { GET_ALL_FILMS_FOR_RENDER, SELECTED_TAB_INDEX, UPDATE_SEARCH_TERM, ADD_MOVIE, UPDATE_MOVIE, OFFSET_COUNTER } from '../actions';

const initialState = {
    movies: [],
    sortBy: '',
    selectedTabIndex: 0,
    searchTerm: '',
    filter: '',
    offset: 0,
};

const homePage = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_FILMS_FOR_RENDER:
            const movieList = (state.offset === 0 && action.offset !== 9) || action.shouldUpdateState ? action.data : state.offset === action.offset ? state.movies : [...state.movies, ...action.data];
            return { ...state, movies: movieList, sortBy: action.sortBy, searchTerm: action.searchTerm, filter: action.filter, offset: action.offset };
        case SELECTED_TAB_INDEX:
            return { ...state, selectedTabIndex: action.payload };
        case UPDATE_SEARCH_TERM:
            return { ...state, searchTerm: action.payload };
        case ADD_MOVIE:
            return { ...state, movies: [action.payload, ...state.movies] };
        case UPDATE_MOVIE:
            const updatedList = state.movies.map(movie => movie.id === action.id ? action.payload : movie)
            return { ...state, movies: updatedList };
        default:
            return state;
    }
};

export default homePage;

