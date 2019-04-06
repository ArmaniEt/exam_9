

export const ADD_TO_BASKET = "ADD_TO_BASKET";



export const addToBasket = (data) => {
    return dispatch => {
        localStorage.setItem('basket', data);
        return dispatch({type: ADD_TO_BASKET, basket: data})
    }
};