

const initialState = {
    chats: [
        {
            id: 1,
            name: 'Ivan'
        },
        {
            id: 2,
            name: 'Vasya'
        }
    ]
}

export const chatsReducers = (state = initialState, action) => {
    switch (action.type) {



        default:
            return state
    }
}