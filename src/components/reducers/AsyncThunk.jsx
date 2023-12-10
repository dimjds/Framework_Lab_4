import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
    "todos/fetch",
    async () => {
        // Make an API call to fetch todos
        const response = await fetch("/api/todos");
        const data = await response.json();
        return data;
    }
);

export const addTodoAsync = createAsyncThunk(
    "todos/add",
    async (todo) => {
        // Make an API call to add a new todo
        const response = await fetch("/api/todos", {
            method: "POST",
            body: JSON.stringify(todo),
        });
        const newTodo = await response.json();
        return newTodo;
    }
);

export const updateTodoAsync = createAsyncThunk(
    "todos/update",
    async (todo) => {
        // Make an API call to update a todo
        const response = await fetch(`/api/todos/${todo.id}`, {
            method: "PUT",
            body: JSON.stringify(todo),
        });
        const updatedTodo = await response.json();
        return updatedTodo;
    }
);

export const deleteTodoAsync = createAsyncThunk(
    "todos/delete",
    async (id) => {
        // Make an API call to delete a todo
        await fetch(`/api/todos/${id}`, {
            method: "DELETE",
        });
        return id;
    }
);
