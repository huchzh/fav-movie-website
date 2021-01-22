import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import { favReducer } from './reducers/favReducers'
import { getMoviesReducer, getMovieDetailsReducer } from './reducers/movieReducers'

const reducer = combineReducers({
    favorites: favReducer,
    getMovies: getMoviesReducer,
    getMovieDetails: getMovieDetailsReducer,
})

const middleware = [thunk]; // helps doing async requests

//Helps data persist in favorites even when page is refreshed
const favoritesFromLocalStorage = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []

const INITIAL_STATE = {
    favorites: {
        favItems: favoritesFromLocalStorage
    }
}

const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;