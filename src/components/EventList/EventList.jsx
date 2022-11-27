import React from 'react';
// import Event from "../Event/Event";
import {useTelegram} from "../hook/useTelegram";

const EventList = async () => {

    const {user} = useTelegram()
    let response = await fetch(`http://127.0.0.1:8000/api/todos/get/${user?.id}`);
    let events = await response.json();

    return (
        <div className={'list'}>
            {events}
            {/*{events.todos.map(event => (*/}
            {/*    event.name*/}
            {/*))}*/}
            check!
        </div>
    );
};

export default EventList;