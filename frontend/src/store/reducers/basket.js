import {ADD_TO_BASKET} from "../actions/basket";


const initialState = {
    basket: null
};


const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BASKET:
            console.log(action.basket);
            return {
                ...state,
                basket: action.basket,

            };
        default:
            return state;

    }
};


export default basketReducer;