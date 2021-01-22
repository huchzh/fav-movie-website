import * as actionTypes from '../constants/favoritesConstants';

export const favReducer = (state = {favItems: []}, action) => {
    switch(action.type) {
        
        case actionTypes.ADD_TO_FAVORITES:
            const item = action.payload;
            const existItem = state.favItems.find((x) => x.movie === item.movie); //check if already added

            if (existItem) {
                return {
                    ...state,
                    favItems: state.favItems.map((x) => x.movie === existItem.movie ? item : x)
                };
            } else {
                return {
                    ...state,
                    favItems: [...state.favItems, item],
                };
            }
        case actionTypes.REMOVE_FROM_FAVORITES:
            return {
                ...state,
                favItems: state.favItems.filter((x) => x.movie !== action.payload),
            }
        default:
            return state;

    }
}