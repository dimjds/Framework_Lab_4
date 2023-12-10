import React, { useState } from 'react';
import Check from './Check.jsx';
import cn from 'classnames';
import {BsTrash, BsPencil, BsCheck} from 'react-icons/bs';

const ToDoItem = ({ todo, changeTodo, removeTodo, editTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(todo.title);
    const [editedDescription, setEditedDescription] = useState(todo.description);

    const handleEditTitle = () => {
        if (editedTitle.trim() !== '') {
            editTodo(todo._id, editedTitle, editedDescription);
            setIsEditing(false);
        }
    };

    return (
        <div
            className={cn('flex items-center mb-4 rounded-2xl bg-gray-800 w-full p-5 justify-between', {
                'editing': isEditing,
            })}
        >
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                        onBlur={handleEditTitle}
                        className='w-full bg-transparent border-none outline-none'
                    />
                    <input
                        type="text"
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                        onBlur={handleEditTitle}
                        className='w-full bg-transparent border-none outline-none ease-in'
                        maxLength={135}
                    />
                </div>
            ) : (
                <div
                    onClick={() => changeTodo(todo._id)}
                    className='flex items-center'
                >
                    <Check isCompleted={todo.isCompleted} />
                    <span className={cn({ 'line-through text-gray-600 transition-colors ease-in': todo.isCompleted })}>
                        {editedTitle}
                    </span>
                    <p className='text-gray-300 ml-2 '>
                        {editedDescription}
                    </p>
                </div>
            )}

            <div className='flex items-center'>
                {isEditing ? (
                    <button onClick={handleEditTitle}>
                        <BsCheck size={24} className='mr-5 text-pink-500 hover:text-pink-600 transition-colors ease-in' />
                    </button>
                ) : (
                    <button onClick={() => setIsEditing(true)}>
                        <BsPencil size={16} className='mr-5 text-pink-500 hover:text-pink-300 transition-colors ease-in' />
                    </button>
                )}
                <button onClick={() => removeTodo(todo._id)}>
                    <BsTrash size={22} className='text-pink-500 hover:text-pink-300 transition-colors ease-in' />
                </button>
            </div>
        </div>
    );
};

export default ToDoItem;
