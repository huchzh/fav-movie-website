import * as actionTypes from '../constants/movieConstants';
import axios from 'axios';

export const getMovies = () => async (dispatch) => {
    try {
        dispatch({type: actionTypes.GET_MOVIES_REQUEST});

        const { data } = await axios.get("/api/movies");

        dispatch({
            type: actionTypes.GET_MOVIES_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_MOVIES_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const getMoviesDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: actionTypes.GET_MOVIE_DETAIL_REQUEST});

        const { data } = await axios.get(`/api/movies/${id}`);
        dispatch({
            type: actionTypes.GET_MOVIE_DETAIL_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_MOVIE_DETAIL_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const removeMovieDetails = () => (dispatch) => {
    dispatch({
        type: actionTypes.GET_MOVIE_DETAIL_RESET,
    });
};