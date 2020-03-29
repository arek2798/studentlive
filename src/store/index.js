import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import studentApp from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(studentApp, composeEnhancers(applyMiddleware(thunk)));


export default store;