
import React, { useState, useEffect } from 'react';
import ToDoItem from './item/ToDoItem.jsx';
import { getTodosFromLocalStorage, saveTodosToLocalStorage } from '../../database/Database.jsx';


const Home = () => {
    const [todos, setTodos] = useState(getTodosFromLocalStorage());

    useEffect(() => {
        saveTodosToLocalStorage(todos);
    }, [todos]);

    const toggleTodoCompletion = (todoId) => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo._id === todoId) {
                    return { ...todo, isCompleted: !todo.isCompleted };
                } else {
                    return todo;
                }
            });
        });
    };

    const removeTodo = (id) => {
        setTodos([...todos].filter((t) => t._id !== id));
    };

    const addTodo = (title, description) => {
        setTodos([
            {
                _id: new Date().toString(),
                title,
                description,
                isCompleted: false,
            },
            ...todos,
        ]);
    };

    const editTodo = (todoId, editedTitle) => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo._id === todoId) {
                    return { ...todo, title: editedTitle };
                } else {
                    return todo;
                }
            });
        });
    };

    return (
        <div className='bg-gray-900 min-h-screen text-white w-4/5 mx-auto'>
            <h1 className='text-2xl font-bold mb-10 text-center justify-center mt-20'>Ваши дела</h1>
            {todos.map((todo) => (
                <ToDoItem
                    key={todo._id}
                    todo={todo}
                    changeTodo={toggleTodoCompletion}
                    removeTodo={removeTodo}
                    editTodo={editTodo}

                />
            ))}
        </div>
    );
};

export default Home;

export class addTodo {
}