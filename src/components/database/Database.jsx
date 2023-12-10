export const getTodosFromLocalStorage = () => {
    const todosData = localStorage.getItem('todos');
    return todosData ? JSON.parse(todosData) : [];
};

export const saveTodosToLocalStorage = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
};

export const createTodo = (title, description) => {
    return {
        _id: new Date().toString(),
        title,
        description,
        isCompleted: false,
    };
};
