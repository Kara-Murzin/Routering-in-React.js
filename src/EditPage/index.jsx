import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";

const EditPage = () => {
    const [task, setTask] = useState();
    const {id} = useParams();
    const edit = () => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${task.id}`, {method: 'PUT',
            body:JSON.stringify({
                ...task,
                completed: task.completed,
            })
        }
            )
    }
    const editInput = (value) => {
        setTask({...task,title:value})
    }
    const editCheckbox = (value) =>{
        setTask({...task,completed:value})
    }
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((responce) => responce.json())
            .then(data => setTask(data))
            console.log({task})
    }, []);

    return (
        <div>
            <div>
                <h2>Edit task:</h2>
                <input  type="checkbox" checked={task && task.completed} onChange={(event)=>editCheckbox(event.target.checked)}/>
                <input value={task && task.title} onChange={(event)=>editInput(event.target.value)}/>
                <button onClick={edit}>Edit</button>
                <Link to="/list">
                    <button>Back to home</button>
                </Link>
            </div>
        </div>
    );
};

export default EditPage;