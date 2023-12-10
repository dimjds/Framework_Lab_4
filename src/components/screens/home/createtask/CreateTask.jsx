import React, { useState } from "react";

const CreateTask = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

    const handleAddTodoClick = () => {
        if (title.trim() === "") {
            setError("Дайте название задачи");
            return;
        }

        if (description.length > 100) {
            setError("Максимальная длина описания задачи - 100 символов.");
            return;
        }

        addTodo(title, description);
        setTitle("");
        setDescription("");
        setError("");
    };

    return (
        <div className="mb-4 mt-10 text-white min-h-screen w-4/5 mx-auto justify-center">
            <h1 className='text-2xl font-bold mb-10 text-center justify-center mt-20'>Добавление задачи</h1>
            {error && <div className="text-red-500">{error}</div>}
            <div className="w-full bg-gray-800 p-5 py-3 rounded-2xl border-zinc-800">
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className="w-full p-2 bg-gray-800 outline-none"
                    placeholder="Введите новую задачу"
                />
            </div>
            <div className="w-full mt-4 bg-gray-800 p-5 py-3 rounded-2xl">
                <input
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className="w-full p-2 bg-gray-800 outline-none"
                    placeholder="Введите описание задачи, максимум 135 символов"
                />
            </div>
            <button
                onClick={handleAddTodoClick}
                className="mt-4 font-bold p-5 bg-pink-700 text-white rounded-xl cursor-pointer">Добавить задачу
            </button>
        </div>
    );
};

export default CreateTask;
