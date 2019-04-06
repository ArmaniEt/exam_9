import {GOOD_LOAD_SUCCESS} from "../actions/good-detail";


const initialState = {
    good: null
};

const goodDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case GOOD_LOAD_SUCCESS:
            return {
                ...state,
                good: action.good,
            };
        default:
            return state
    }

};


export default goodDetailReducer;