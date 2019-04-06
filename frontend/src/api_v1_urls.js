import axios from 'axios'

const BASE_URL = 'http://localhost:8000/api/v1';
const GOODS_URL = BASE_URL + '/goods/';
const TOKEN_LOGIN_URL = '/token-login/';
const LOGIN_URL = '/login/';


const instance = axios.create({
    baseURL: BASE_URL
});

// import axios from here as axios


export default instance;
export {GOODS_URL, TOKEN_LOGIN_URL, LOGIN_URL}