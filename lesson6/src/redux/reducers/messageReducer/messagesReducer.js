
import { DELETE_MESSAGES } from '../../actions/actionTypes';
import { ADD_MESSAGE } from '../../actions/actionTypes';

const initialState = {
    messages: [
        {
            id: 1,
            chatId: '1',
            title: 'Who you'
        }
    ]
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_MESSAGES:
            return {
                ...state,
                messages: state.messages.filter(item => item.id !== action.payload)
            }

        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }


        default:
            return state
    }
}