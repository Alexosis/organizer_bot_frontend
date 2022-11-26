import React from 'react';
import './Form.css'

const Form = () => {
    return (
        <div className={"form"}>
            <label>Название:
                <input type="text" name="Name"/>
            </label>
            <label>Дата:
                <input type="datetime-local" name="timestamp"/>
            </label>
            <label>Описание события:
                <textarea/>
            </label>
            <label>
                Приоритет важности:
                <select>
                    <option value="height">Высокий</option>
                    <option value="medium">Средний</option>
                    <option value="low">Низкий</option>
                </select>
            </label>
        </div>
    );
};

export default Form;