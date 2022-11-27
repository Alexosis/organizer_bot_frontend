import React from 'react';
// import Event from "../Event/Event";
import {useTelegram} from "../hook/useTelegram";

const EventList = async () => {

    const {user} = useTelegram()
    let events = (await fetch(`http://127.0.0.1:8000/api/todos/get/${user?.id}`)).json();

    return (
        <div className={'list'}>
            {events}
            {/*{events.map(event => (*/}
            {/*    <Event*/}
            {/*        event = {event}*/}
            {/*        className = {'event'}*/}
            {/*        onBack = {onBack}*/}
            {/*    />*/}
            {/*))}*/}
        </div>
    );
};

export default EventList;