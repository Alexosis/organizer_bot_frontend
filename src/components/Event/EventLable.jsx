import React from "react";

const EventLable = ({event, className}) => {

    function DateFormat(date){
        date = new Date(Date(date));
        return date.getDate() + '.' + (date.getMonth()+1) + '.' + date.getFullYear() % 100;
    }

    return (
        <div className={'item ' + className}>
            <span className={'title'}>{event.name}</span>
            <span className={'date'}>{DateFormat(event.date)}</span>
            <span className={'add-btn'}>
                Назад
            </span>
        </div>
    );
};

export default EventLable;