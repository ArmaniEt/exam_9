import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import {createStore, applyMiddleware} from 'redux';
import root from './store/reducers/root';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

axios.defaults.baseURL = BASE_URL;
//TODO set a base url in urls.js

const store = createStore(root, applyMiddleware(thunkMiddleware));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
