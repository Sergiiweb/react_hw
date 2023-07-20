import React, {useEffect, useState} from 'react';
import {todosService} from "../../../services/todosService";
import {Todo} from "../Todo/Todo";

const Todos = () => {
    const [todos, setTodos] = useState([]);
    // const [trigger, setTrigger] = useState(null);

    useEffect(() => {
        todosService.getAll().then(({data}) => setTodos(data))
    }, [])

    return (
        <div>
            <h2>Todos:</h2>
            {todos.map(todo=><Todo key={todo.id} todo={todo} />)}
        </div>
    );
};

export {Todos};