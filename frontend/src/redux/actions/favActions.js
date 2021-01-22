import * as actionTypes from '../constants/favoritesConstants';
import axios from 'axios';

export const addToFavorites = (id) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/movies/${id}`);

    dispatch({
        type: actionTypes.ADD_TO_FAVORITES,
        payload: {
            movie: data._id,
            title: data.title,
            actors: data.actors,
            imageUrl: data.imageUrl,
            description: data.description,
        }
    })
    localStorage.setItem('favorites', JSON.stringify(getState().favorites.favItems))
};

export const removeFromFavorites = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_FAVORITES,
        payload: id,
    })
    localStorage.setItem('favorites', JSON.stringify(getState().favorites.favItems))
};