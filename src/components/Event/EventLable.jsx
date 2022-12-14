import React from "react";
import './Event.css';

const EventLable = ({event}) => {

    function DateFormat(date) {
        date = new Date(Date(date));
        return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() % 100;
    }

    function expand() {
        let content = document.getElementById(event.description)
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    }

    // <div className={'item ' + className}>
    // {/*<table onClick={expand}>*/}
    // {/*    <tr>*/}
    // {/*        <td className={'title'}>{event.name}</td>*/}
    // {/*        <td className={'date'}>{DateFormat(event.date)}</td>*/}
    // {/*    </tr>*/}
    // {/*</table>*/}
    // {/*    <div className={"expand"}>*/}
    // {/*        <div className={'description'}>{event.description}</div>*/}
    // {/*    </div>*/}
    // {/*</div>*/}


    return (
        <div className={"event"}>
            <table>
                <tr onClick={expand}>
                <td className={'name'}>{event.name}</td>
                <td className={'date'}>{DateFormat(event.date)}</td>
                </tr>
            </table>
            <div className={'description'} id={event.description}>{event.description}</div>
        </div>);


};

export default EventLable;