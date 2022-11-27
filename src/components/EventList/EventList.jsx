import React from 'react';
import Event from "../Event/Event";
import {useTelegram} from "../hook/useTelegram";

const {user} = useTelegram()
let events = await fetch(`http://127.0.0.1:8000/api/todos/get/${user?.id}`);

const EventList = () => {

    return (
        <div className={'list'}>
            {events.map(event => (
                <Event
                    event = {event}
                    className = {'event'}
                    onBack = {onBack}
                />
            ))}
        </div>
    );
};

export default EventList;