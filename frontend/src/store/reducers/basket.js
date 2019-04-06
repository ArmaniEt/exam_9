import {ADD_TO_BASKET} from "../actions/basket";


const initialState = {
    basket: []
};


const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BASKET:
            const item = action.basket;
            let newBasket = state.basket;
            newBasket.push(item);
            localStorage.setItem('fulledBasket', newBasket);
            return {
                ...state,
                basket: newBasket

            };
        default:
            return state;

    }
};


export default basketReducer;