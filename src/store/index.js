import { createStore } from 'redux'
import studentApp from '../reducers'
const store = createStore(
    studentApp /* preloadedState, */,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;