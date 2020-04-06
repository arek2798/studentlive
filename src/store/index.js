import { createStore, applyMiddleware, compose } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import studentApp from '../reducers';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
console.log(persistedState);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(studentApp, persistedState, composeEnhancers(applyMiddleware(thunk)));

store.subscribe(() => {
    saveState({
        userID: store.getState().userID
    })
})

export default store;