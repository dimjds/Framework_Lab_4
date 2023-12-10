import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
};

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        toggleTodoCompletion: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            todo.isCompleted = !todo.isCompleted;
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
    },
});

export const { actions, reducer } = todoSlice;