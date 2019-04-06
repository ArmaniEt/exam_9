import {combineReducers} from 'redux';
import goodListReducer from "./good-list";
import goodDetailReducer from "./good-detail";
import authReducer from "./auth";
import tokenLoginReducer from "./app";
import loginReducer from "./login";



const rootReducer = combineReducers({
    goodList: goodListReducer,
    goodDetail: goodDetailReducer,
    auth: authReducer,
    app: tokenLoginReducer,
    login: loginReducer
});

export default rootReducer