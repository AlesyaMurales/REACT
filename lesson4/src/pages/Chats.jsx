import React, { useState } from 'react';


const Chats = () => {
    const [name, setName] = useState('');
    const [chats, setChats] = useState([
        {
            id: 1,
            name: 'Ivan'
        },
        {
            id: 2,
            name: 'Petr'
        },
    ]);
    const addHandler = () => {
        let random = Math.random();
        let newValue = {
            id: random,
            name: name
        }
        setChats(prevState => [...prevState, newValue])
    };
    const deleteHandler = (id) => {
        let newValue = chats.filter((item) => item.id !== id);
        setChats(newValue)

    };
    return (
        <div>
            Chats
            <input name={name} value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={addHandler}>
                Создать
            </button>
            {chats.map((chat) => {
                return (
                    <div style={{ display: "flex" }} key={chat.id}>
                        <div>
                            {chat.name}
                        </div>
                        <div> <button onClick={() => deleteHandler(chat.id)}>x</button></div>
                    </div>
                )
            })}
        </div>
    );
};

export default Chats;