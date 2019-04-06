export const ADD_TO_BASKET = "ADD_TO_BASKET";



export const addToBasket = (data) => {
    return dispatch => {
        return dispatch({type: ADD_TO_BASKET, basket: data})
    }
};