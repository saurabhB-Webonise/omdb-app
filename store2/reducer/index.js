import { createStore, applyMiddleware, combineReducers, compose } from '../../node_modules/redux';
import thunk from '../../node_modules/redux-thunk';

import ReducerOne from './reducer-one';
import ReducerTwo from './reducer-two';

const AppReducers = combineReducers({
    ReducerOne,
    ReducerTwo
});

const store = createStore(AppReducers, compose(applyMiddleware(thunk)));

export default store;
