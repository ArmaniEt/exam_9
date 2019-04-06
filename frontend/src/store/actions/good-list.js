import axios, {GOODS_URL} from "../../api_v1_urls";
export const GOOD_LIST_REQUEST_SUCCESS = "GOOD_LIST_REQUEST_SUCCESS";


export const loadGoods = () => {
    return dispatch => {
        axios.get(GOODS_URL)
            .then(response => {
                console.log(response.data);
                return dispatch({type: GOOD_LIST_REQUEST_SUCCESS, goods: response.data})
            })
            .catch(error => console.log(error));
    }
};