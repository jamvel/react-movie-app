import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import App from 'components/App';
import makeStore from './stores'
import * as serviceWorker from './serviceWorker';

axios.defaults.baseURL = process.env.REACT_APP_TMDB_API_BASE_URL;

// Check if key is defined, if not assume a proxy is being used
if(process.env.REACT_APP_TMDB_API_KEY){
    axios.defaults.params = {}
    axios.defaults.params['api_key'] = process.env.REACT_APP_TMDB_API_KEY;
}

ReactDOM.render(
    <React.StrictMode>
        <Provider store={makeStore()}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
