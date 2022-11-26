import React from 'react';
import Button from "../button/Button";
import {useTelegram} from "../hook/useTelegram";
import './Header.css'

const Header = () => {
    const {user, onClose}= useTelegram();

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>Привет, {user?.username}!</span>
        </div>
    );
};

export default Header;