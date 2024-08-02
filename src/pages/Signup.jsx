import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
    let [credentials, setCredentials] = useState({});

    let handleSubmit = async (e) => {
        console.log('request sent');
        e.preventDefault();
        let response = await fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
        console.log(response);
    }

    return (
        <div className='w-full h-4/5 mt-1 flex flex-col items-center overflow-scroll no-scrollbar mb-7 text-amber-950'>
            <div className='w-2/3 max-w-xl mt-10 p-8 border border-gray-500 rounded-2xl bg-amber-700 bg-opacity-70 flex flex-col'>
                <div className=''>
                    <h1 className='text-xl'>
                        Welcome to <span className=' font-bold italic'>FoodFinder</span>
                    </h1>
                    <h2 className='text-lg mt-2 text-amber-900'>
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
                                className=' pl-4 rounded-lg p-1 bg-amber-900 text-amber-100 mt-1  w-full outline-none'
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
                                className='pl-4 rounded-lg p-1 bg-amber-900 text-amber-100 mt-1  w-full outline-none'
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
                            className='pl-4 rounded-lg p-1 bg-amber-900 text-amber-100 mt-1  w-full outline-none'
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
                            className='pl-4 flex rounded-lg p-1 bg-amber-900 text-amber-100 mt-1  w-full outline-none'
                        />
                    </div>
                    <button type='submit' className='border-2 border-amber-950 mt-7 p-2 rounded-lg transition-all ease-in-out duration-300 hover:bg-amber-800 hover:rounded-2xl bg-amber-700 hover:text-red-950 hover:text-xl hover:font-semibold'>
                        Sign up
                    </button>
                </form>
                
                <h2 className='text-center mt-10'>
                    Or Signup with
                </h2>
                <button className='bg-amber-700 hover:bg-amber-800 hover:rounded-2xl transition-all ease-in-out duration-300 mt-2 border-2 border-amber-950 hover:text-xl hover:font-semibold p-2 rounded-lg'>
                    Google
                </button>
                <button className='bg-amber-700 hover:bg-amber-800 hover:rounded-2xl transition-all ease-in-out duration-300 mt-3 border-2 border-amber-950 hover:text-xl hover:font-semibold p-2 rounded-lg'>
                    Facebook
                </button>
                <button className='bg-amber-700 hover:bg-amber-800 hover:rounded-2xl transition-all ease-in-out duration-300 mt-3 border-2 border-amber-950 hover:text-xl hover:font-semibold p-2 rounded-lg'>
                    Discord
                </button>
                <Link to="/login" className='text-center mt-6'>Already a User?</Link>
            </div>

        </div>
    )
}

export default Signup