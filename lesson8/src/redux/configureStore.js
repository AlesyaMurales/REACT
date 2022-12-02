
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './reducers/userReducer/userReducer';
import { applyMiddleware } from 'redux';

export const store = createStore(userReducer, applyMiddleware(thunk))