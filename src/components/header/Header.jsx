import React from 'react';
import {useTelegram} from "../hook/useTelegram";
import './Header.css'

const Header = () => {
    const {user}= useTelegram();

    return (
        <div className={'header'}>
            <span className={'username'}>Привет{user.username ? user.username:''}!</span>
        </div>
    );
};

export default Header;