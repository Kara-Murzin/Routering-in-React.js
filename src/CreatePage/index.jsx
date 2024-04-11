import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreatePage = () => {
    const [text, setText] = useState('');
    const [check, setCheck] = useState('false');

    const changeInp = (event) => {
        setText(event.target.value);
    };
    const changeCheck = (event) => {
        setCheck(event.target.checked);
    };

    const add = () => {
        // setTodoList((prevTodoList) => [...prevTodoList, text]);
        setText('');
        fetch('https://jsonplaceholder.typicode.com/todos/', {
            method: 'POST',
            body: JSON.stringify({
                completed: check,
                title: text,
                userId: 6,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

    };

    return (
        <div>
            <h2>New task:</h2>
            <input onChange={changeCheck} type="checkbox" value={check}/>
            <input onChange={changeInp} value={text} />
            <button onClick={add}>Add</button>
            <Link to="/list">
                <button>Back to home</button>
            </Link>
        </div>
    );
};

export default CreatePage;
