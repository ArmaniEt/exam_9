import {combineReducers} from 'redux';
import goodListReducer from "./good-list";
import goodDetailReducer from "./good-detail";



const rootReducer = combineReducers({
    goodList: goodListReducer,
    goodDetail: goodDetailReducer
});

export default rootReducer