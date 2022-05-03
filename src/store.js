import {createStore, applyMiddleware} from 'redux';
import { bankingReducer } from './reducers/bankingReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import { rootReducer } from './reducers/rootReducer';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()))