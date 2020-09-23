export const GET_ALL_FILMS = 'GET_ALL_FILMS';

export const getAllFilms = (response) => ({
    type: GET_ALL_FILMS,
    payload: response,
});