import React from "react";

const EventLable = ({event, className}) => {

    return (
        <div className={'item ' + className}>
            <span className={'title'}>{event.name}</span>
            <span className={'date'}>{event.date}</span>
            <span className={'add-btn'}>
                Назад
            </span>
        </div>
    );
};

export default EventLable;