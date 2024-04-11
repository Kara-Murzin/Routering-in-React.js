import React, { useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const ListPage = () => {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = () => {fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(json => {
            setTodoList(json);
            console.log(json)
        })}
    const delBtn = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {method: 'DELETE'})
            .then(async response => {
                const res = await response;
                if (res.ok) {
                    fetchData();
                }
            });
    };
    const changeCheckbox = (object) => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${object.id}`, {method: 'PUT',
            body:JSON.stringify({
                ...object,
                completed: !object.completed,
            })
        }
            )
    }
    return (
        <div>
            <h1>ZhaSa</h1>
            <Link to="/"><button>Back to Home</button></Link>
            <Link to="/create"><button>Жаңа тапсырма қосу</button></Link>
            <main>
                {todoList && todoList.map(object => (
                    <div key={object.id}>
                        <input type="checkbox" checked={object.completed} name="" id="" onChange={()=>changeCheckbox(object)}/>
                        <label>{object.title}</label>
                        <Link to={`/edit/${object.id}`}>
                            <button >edit</button>
                        </Link>
                        <button onClick={() => delBtn(object.id)}>delete  </button>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default ListPage;