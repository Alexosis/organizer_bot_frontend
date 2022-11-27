import React from "react";
import './Event.css';

const EventLable = ({event, className}) => {

    function DateFormat(date){
        date = new Date(Date(date));
        return date.getDate() + '.' + (date.getMonth()+1) + '.' + date.getFullYear() % 100;
    }

    return (
        <div className={'item ' + className}>
            <span className={'title'}>{event.name}</span>
            <span className={'date'}>{DateFormat(event.date)}</span>
        </div>
    );
};

export default EventLable;