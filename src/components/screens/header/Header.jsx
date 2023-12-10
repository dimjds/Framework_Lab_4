import React from 'react';
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header className="flex items-center bg-gray-800 p-4 text-white">
            <h1 className="text-2xl font-bold ml-20">TIME TODO</h1>

            <div className="ml-auto mr-20">
                <Link className='p-3 font-bold bg-pink-700 rounded-xl mr-5' to="/">Главная</Link>
                <Link className='p-3 font-bold bg-pink-700 rounded-xl' to="/CreateTask" >Создать задачу</Link>
            </div>
        </header>
    );
};

export default Header;
