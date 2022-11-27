import React from "react";

const Event = ({event, className, onBack}) => {
    const onBackHandler = () => {
        onBack(product);
    }

    return (
        <div className={'product ' + className}>
            <div className={'title'}>{event.name}</div>
            <div className={'date'}>{event.date}</div>
            <div className={'description'}>{event?.description}</div>
            <div className={'priority'}>{event?.description}</div>
            <button className={'add-btn'} onClick={onBackHandler}>
                Назад
            </button>
        </div>
    );
};

export default Event;