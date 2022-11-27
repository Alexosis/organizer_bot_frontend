import React from 'react';
// import EventLable from "../EventLable/EventLable";
// import {useTelegram} from "../hook/useTelegram";
// import header from "../header/Header";
import './EventList.css'
import EventLable from "../Event/EventLable";

const events = {
    "todos":[
        {
            "name": "Test1",
            "description": "test desc 1",
            "date": "2022-11-27T12:41:00+3:00",
            "userID": 422260714
        },
        {
            "name": "Test2",
            "description": "test desc 2",
            "date": "2022-12-27T12:41:00+3:00",
            "userID": 422260714
        }
    ]}

const EventList = () => {

    // const {user} = useTelegram()
    // let response = await fetch(`http://127.0.0.1:8000/api/todos/get/${user?.id}`, {headers:{Access-Control-Allow-Origin: *}});
    // let events = await response.json();


    return (
        <div className={'list'}>
            {events.todos.map(event => (
                <EventLable className={"event"} event={event} />
            ))}
        </div>
    );
};

export default EventList;