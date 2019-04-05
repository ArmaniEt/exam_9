import axios from 'axios'

// const BASE_URL


const instance = axios.create({
    baseURL: BASE_URL
});

// import axios from here as axios


export default instance;