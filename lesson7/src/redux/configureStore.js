import { createStore } from "redux";
import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from 'redux-persist/lib/storage';
import { messagesReducer } from "./reducer/messageReducer";


const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    messages: messagesReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer);
export const persist = persistStore(store);