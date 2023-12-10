import CreateTask from "./CreateTask.jsx";
import {addTodo} from "../Home.jsx";
import {useEffect, useState} from "react";
import {getTodosFromLocalStorage, saveTodosToLocalStorage} from "../../../database/Database.jsx";
const CreateTaskRoute = () => {

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
                _id: new Date().toString(), // Use a string ID
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


    return(
        <div>
            <CreateTask addTodo={addTodo}/>
        </div>
    )


}

export default CreateTaskRoute;