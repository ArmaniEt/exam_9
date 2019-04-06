import {combineReducers} from 'redux';
import goodListReducer from "./good-list";
import goodDetailReducer from "./good-detail";
import authReducer from "./auth";
import tokenLoginReducer from "./app";
import loginReducer from "./login";
import basketReducer from "./basket";


const rootReducer = combineReducers({
    goodList: goodListReducer,
    goodDetail: goodDetailReducer,
    auth: authReducer,
    app: tokenLoginReducer,
    login: loginReducer,
    basket: basketReducer
});

export default rootReducer