import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import config from './config/reducer';
import movies from './movies/reducer';
import ui from './ui/reducer';

const makeStore = () => createStore(
    combineReducers({
        config,
        movies,
        ui
    }),
    compose(
        applyMiddleware(thunk),
        typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f, // eslint-disable-line no-underscore-dangle
    ),
);

export default makeStore;
  