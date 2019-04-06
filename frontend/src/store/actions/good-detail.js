import axios, {GOODS_URL} from "../../api_v1_urls";


export const GOOD_LOAD_SUCCESS = "GOOD_LOAD_SUCCESS";


export const loadGood = (id) => {
    return dispatch => {
        axios.get(GOODS_URL + id).then(response => {
            console.log(response.data);
            return dispatch({type: GOOD_LOAD_SUCCESS, good: response.data});
        }).catch(error => {
            console.log(error);
            console.log(error.response);
        });
    }
};