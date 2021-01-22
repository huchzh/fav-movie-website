import * as actionTypes from '../constants/movieConstants';

export const getMoviesReducer = (state = { movies: [] }, action) => {
    switch(action.type) {
        case actionTypes.GET_MOVIES_REQUEST:
            return {
                loading: true,
                movies: [],
            };
        case actionTypes.GET_MOVIES_SUCCESS:
            return {
                loading: false,
                movies: action.payload,
            };
        case actionTypes.GET_MOVIES_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const getMovieDetailsReducer = (state = { movie: [] }, action) => {
    switch(action.type) {
        case actionTypes.GET_MOVIE_DETAIL_REQUEST:
            return {
                loading: true,
            };
        case actionTypes.GET_MOVIE_DETAIL_SUCCESS:
            return {
                loading: false,
                movie: action.payload,
            };
        case actionTypes.GET_MOVIE_DETAIL_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case actionTypes.GET_MOVIE_DETAIL_RESET:
            return {
                movie: {},
            };
        default:
            return state;
    }
};