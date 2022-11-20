import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { messageSelector } from './../redux/reducers/messageReducer/selector';
import { useDispatch } from 'react-redux';
import { ADD_MESSAGE, DELETE_MESSAGES } from './../redux/actions/actionTypes';
import { useState } from 'react';

const Messages = () => {
    const { idd } = useParams();
    const [title, setTitle] = useState();
    const dispatch = useDispatch()
    const chatsMessage = useSelector(messageSelector);

    const message = chatsMessage.filter((message) => {
        if (!idd) return true;

        return message.chatId === Number(idd)
    })

    const addMessage = () => {
        const random = Math.random()
        const obj = {
            id: random,
            chatId: idd,
            title: title
        }

        dispatch({ type: ADD_MESSAGE, payload: obj })
    }

    const deleteMessage = (id) => {
        dispatch({ type: DELETE_MESSAGES, payload: id })
    }

    return (
        <div>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <button onClick={addMessage}>+</button>
            {message.map((item) => (
                <div key={item.id}>
                    <div>{item.title}</div>
                    <div><button onClick={() => deleteMessage(item.id)}>x</button></div>
                </div>
            ))}
        </div>
    );
};

export default Messages;