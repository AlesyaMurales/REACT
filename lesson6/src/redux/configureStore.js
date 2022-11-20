import { combineReducers, createStore } from "redux";


import { messagesReducer } from "./reducers/messageReducer/messagesReducer";
import { chatsReducers } from './reducers/chatsReducer/chatsReducers';


export const store = createStore(combineReducers({
    chats: chatsReducers,
    messages: messagesReducer
}));