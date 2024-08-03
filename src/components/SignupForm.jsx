import React from 'react'
import { Link } from 'react-router-dom';
import Google from '../assets/google.png';
import Facebook from '../assets/facebook.png';
import Discord from '../assets/discord.png';

function SignupForm({
    handleSubmit,
    firstname,
    lastname,
    email,
    location,
    onFirstnameChange,
    onLastnameChange,
    onEmailChange,
    onLocationChange,
    password,
    onPasswordChange,
}) {
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
                                value={firstname}
                                onChange={(e) => onFirstnameChange && onFirstnameChange(e.target.value)}
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
                                value={lastname}
                                onChange={(e) => onLastnameChange && onLastnameChange(e.target.value)}
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
                            value={email}
                            onChange={(e) => onEmailChange && onEmailChange(e.target.value)}
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
                            value={password}
                            onChange={(e) => onPasswordChange && onPasswordChange(e.target.value)}
                            placeholder='*********'
                            className='pl-4 flex rounded-lg p-1 bg-amber-900 text-amber-100 mt-1  w-full outline-none'
                        />
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label htmlFor='location'>
                            Location
                        </label>
                        <input
                            name='location'
                            id='location'
                            type='text'
                            required
                            value={location}
                            onChange={(e) => onLocationChange && onLocationChange(e.target.value)}
                            placeholder='Pune, Maharasthra'
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
                <button className='bg-amber-700 hover:bg-amber-800 hover:rounded-2xl transition-all ease-in-out duration-300 mt-2 border-2 border-amber-950 hover:text-xl hover:font-semibold p-2 rounded-lg flex max-h-11 justify-center gap-2'>
                    <img src={Google} className='h-full' /> Google
                </button>
                <button className='bg-amber-700 hover:bg-amber-800 hover:rounded-2xl transition-all ease-in-out duration-300 mt-3 border-2 border-amber-950 hover:text-xl hover:font-semibold p-2 rounded-lg max-h-11 flex gap-2 justify-center'>
                    <img src={Facebook} className='h-full' /> Facebook
                </button>
                <button className='bg-amber-700 hover:bg-amber-800 hover:rounded-2xl transition-all ease-in-out duration-300 mt-3 border-2 border-amber-950 hover:text-xl hover:font-semibold p-2 rounded-lg flex gap-2 justify-center max-h-11'>
                    <img src={Discord} className='h-full' /> Discord
                </button>
                <Link to="/login" className='text-center mt-6'>Already a User?</Link>
            </div>

        </div>
    )
}

export default SignupForm