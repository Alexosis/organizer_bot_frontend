import React from "react";
import './Event.css';

const EventLable = ({event, className}) => {

    function DateFormat(date){
        date = new Date(Date(date));
        return date.getDate() + '.' + (date.getMonth()+1) + '.' + date.getFullYear() % 100;
    }

    function expand(){
        let content = document.getElementsByClassName("expand")[0];
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    }

    return (
        <div className={'item ' + className}>
            <table onClick={expand}>
                <tr>
                    <td className={'title'}>{event.name}</td>
                    <td className={'date'}>{DateFormat(event.date)}</td>
                </tr>
            </table>
            <div className={"expand"}>
                <div className={'description'}>{event.description}</div>
            </div>
        </div>
    );
};

export default EventLable;