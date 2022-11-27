import React, {useCallback, useEffect, useState} from 'react';
import './Form.css';
import {useTelegram} from "../hook/useTelegram";

const Form = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const {tg} = useTelegram();

    const onSendData = useCallback(()=>{
        const data = {
            "todos": {
                name,
                date,
                description,
                // "userID":tg.user.id
            }
        }
        tg.sendData(JSON.stringify(data));
    }, [name, date, description, tg])

    useEffect(()=>{
        tg.onEvent('mainButtonClicked', onSendData)
        return () =>{
            tg.offEvent('mainButtonClicked', onSendData)
        }
    })

    useEffect(()=>{
        tg.MainButton.setParams({
            text:'Сохранить событие'
        })
    }, [tg])

    useEffect(()=>{
        if(!name || !date){
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [name, date, tg])

    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeDate = (e) => {
        setDate(e.target.value)
    }
    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }
    const onChangePriority = (e) => {
        setPriority(e.target.value)
    }

    return (
        <div className={"form"}>
            <label>Название:
                <input
                    type="text"
                    name="Name"
                    value={name}
                    onChange={onChangeName}
                />
            </label>
            <label>Дата:
                <input
                    type="datetime-local"
                    name="timestamp"
                    value={date}
                    onChange={onChangeDate}
                />
            </label>
            <label>Описание события:
                <textarea
                    value={description}
                    onChange={onChangeDescription}
                />
            </label>
            <label>
                Приоритет важности:
                <select
                    value={priority}
                    onChange={onChangePriority}
                >
                    <option value="height">Высокий</option>
                    <option value="medium">Средний</option>
                    <option value="low">Низкий</option>
                </select>
            </label>

        </div>
    );
};

export default Form;