import { GET_ALL_FILMS } from '../actions';

const initialState = {
    data: [],
};

const homePage = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_FILMS:
            return { ...state, data: action.payload };
        default:
            return state;
    }
};

export default homePage;

