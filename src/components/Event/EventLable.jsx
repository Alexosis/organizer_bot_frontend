import React from "react";
import './Event.css';

const EventLable = ({event, className}) => {

    function DateFormat(date){
        date = new Date(Date(date));
        return date.getDate() + '.' + (date.getMonth()+1) + '.' + date.getFullYear() % 100;
    }

    return (
        <div className={'item ' + className}>
            <table>
                <tr>
                    <td className={'title'}>{event.name}</td>
                    <td className={'date'}>{DateFormat(event.date)}</td>
                </tr>
            </table>
            <div className={"expand"}>
                <div className={'title'}></div>
            </div>
        </div>
    );
};

export default EventLable;