import React from 'react';
// import {useTelegram} from "../hook/useTelegram";
// import header from "../header/Header";
import './EventList.css'
import EventLable from "../Event/EventLable";
import db from'../../../public/db.json'

// const events_synt = {
//     "todos":[
//         {
//             "name": "Test1",
//             "description": "test desc 1",
//             "date": "2022-11-27T12:41:00+3:00",
//             "userID": 422260714
//         },
//         {
//             "name": "Test2",
//             "description": "test desc 2",
//             "date": "2022-12-27T12:41:00+3:00",
//             "userID": 422260714
//         }
//     ]}

const events_synt = db;

const EventList = () => {

    // const {user} = useTelegram()
    // let response = fetch(`https://127.0.0.1:8000/api/todos/get/${user?.id}`, {mode:'no-cors'});
    // let events = response.json();


    return (
        <div className={'list'}>
            {/*{response}*/}
            {/*{events}*/}
            {events_synt.todos.map(event => (
                <EventLable className={"event"} event={event.fields} />
            ))}
        </div>
    );
};

export default EventList;