import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <NavLink to={'/profile'}>
                Профиль
            </NavLink>
            <NavLink to={'/chats'}>
                Чаты
            </NavLink>

        </div>
    );
};

export default Home;