import React from 'react';

export default function Header() {
    return (
        <header className='flex items-center justify-between gap-4 p-4'>
            <a href="/">
                <h1 className='font-medium text-xl transition-transform duration-300 ease-in-out hover:text-blue-500 hover:scale-105'>
                    ScribiDooo
                </h1>
            </a>
            <div className='gap-4 flex items-center'>
                <a href="/" className='flex items-center gap-2 specialBtn px-3 py-2 rounded-lg text-blue-400'>
                    <p>New</p>
                    <i className="fa-solid fa-plus"></i>
                </a>
            </div>
        </header>
    );
}
