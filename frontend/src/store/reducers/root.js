import {combineReducers} from 'redux';
import goodListReducer from "./good-list";



const rootReducer = combineReducers({
    goodList: goodListReducer
});

export default rootReducer