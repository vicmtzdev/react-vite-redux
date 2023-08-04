import { useState } from 'react';
import { useGetTodosQuery, useGetTodoQuery } from './store/apis/todosApi';

export const TodoApp = () => {

    const [todoId, setTodoId] = useState(1);
    // const { data: todos = [], isLoading } = useGetTodosQuery();
    const { data: todo, isLoading } = useGetTodoQuery(todoId);

    const nextTodo = () => {
        setTodoId(todoId + 1);
    }

    const prevTodo = () => {
        if (todoId === 1) return;
        setTodoId(todoId - 1);
    }



    return (
        <>

            <h1>Todo - RTK Query</h1>

            <h4>{isLoading ? 'Loading...' : ''}</h4>

            <pre>{JSON.stringify(todo)}</pre>

            <button onClick={nextTodo} >
                Next Todo
            </button>

            <button onClick={prevTodo} >
                Previous Todo
            </button>

            {/* <ul>
                {
                    todos.map(todo => (
                        <li key={todo.id}>
                            <strong>{todo.completed ? 'Done ' : 'Pending '}</strong>
                            {todo.title}
                        </li>
                    ))
                }
            </ul> */}


        </>
    )
}
