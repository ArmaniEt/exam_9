import {GOOD_LIST_REQUEST_SUCCESS} from "../actions/good-list";


const initialState = {
    goods: []
};


const goodListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GOOD_LIST_REQUEST_SUCCESS:
            return {...state, goods: action.goods};
        default:
            return state

    }
};

export default goodListReducer;