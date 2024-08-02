import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
    let [credentials, setCredentials] = useState({});

    let handleSubmit = async (e) => {
        console.log('request sent');
        e.preventDefault();
        let response = await fetch('http://localhost:5000/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
        console.log(response);
    }

    return (
        <div className='w-full h-4/5 mt-1 flex flex-col items-center text-white overflow-scroll no-scrollbar mb-7'>
            <div className='w-2/3 max-w-xl mt-10 p-8 border border-gray-500 rounded-lg bg-gray-950 flex flex-col'>
                <div className=''>
                    <h1 className='text-xl'>
                        Welcome to <span className=' font-bold italic'>FoodFinder</span>
                    </h1>
                    <h2 className='text-lg mt-2 text-gray-400'>
                        Sign up to access our amazing food recommendations
                    </h2>
                </div>

                <form onSubmit={handleSubmit} className=' mt-9 flex flex-col'>
                    <div className='flex gap-3'>
                        <div className='flex flex-col'>
                            <label htmlFor='firstname'>
                                First name
                            </label>
                            <input
                                name='firstname'
                                id='firstname'
                                required
                                placeholder='John'
                                className=' pl-4 rounded-lg p-1 bg-gray-700 mt-1  w-full'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='lastname'>
                                Last name
                            </label>
                            <input
                                name='lastname'
                                id='lastname'
                                placeholder='Lark'
                                className='pl-4 rounded-lg p-1 bg-gray-700 mt-1  w-full'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label htmlFor='email'>
                            Email
                        </label>
                        <input
                            name='email'
                            id='email'
                            type='email'
                            required
                            placeholder='example@example.com'
                            className='pl-4 rounded-lg p-1 bg-gray-700 mt-1 w-full'
                        />
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label htmlFor='password'>
                            Password
                        </label>
                        <input
                            name='password'
                            id='password'
                            type='password'
                            required
                            placeholder='*********'
                            className='pl-4 flex rounded-lg p-1 bg-gray-700 mt-1 w-full'
                        />
                    </div>
                    <button type='submit' className='border mt-7 p-2 rounded-lg transition-all ease-in-out duration-300 hover:bg-gray-800 hover:rounded-xl'>
                        Sign up
                    </button>
                </form>
                <div className='w-full h-4 rounded-full shadow-xl shadow-green-500 bg-gray-950 mt-8'></div>
                <h2 className='text-center mt-10'>
                    Or Signup with
                </h2>
                <button className='bg-gray-900 hover:bg-gray-700 hover:rounded-2xl transition-all ease-in-out duration-300 mt-2 border p-2 rounded-lg'>
                    Google
                </button>
                <button className='bg-gray-900 hover:bg-gray-700 hover:rounded-2xl transition-all ease-in-out duration-300 mt-3 border p-2 rounded-lg'>
                    Facebook
                </button>
                <button className='bg-gray-900 hover:bg-gray-700 hover:rounded-2xl transition-all ease-in-out duration-300 mt-3 border p-2 rounded-lg'>
                    Discord
                </button>
                <Link to="/login" className='text-center mt-6'>Already a User?</Link>
            </div>

        </div>
    )
}

export default Signup