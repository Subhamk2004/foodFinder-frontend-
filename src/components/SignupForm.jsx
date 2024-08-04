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
        <div className='w-full h-full mt-1 flex flex-col items-center overflow-scroll no-scrollbar mb-7 text-gray-900'>
            <div className='w-11/12 sm:w-2/3 max-w-xl mt-10 p-8 border border-gray-500 rounded-2xl bg-lime-200 bg-opacity-90 flex flex-col'>
                <div className=''>
                    <h1 className='text-xl'>
                        Welcome to <span className=' font-bold italic'>FoodFinder</span>
                    </h1>
                    <h2 className='text-lg mt-2 text-lime-900'>
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
                                className=' pl-4 rounded-lg p-1 bg-lime-700 text-lime-100 mt-1  w-full outline-none'
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
                                className='pl-4 rounded-lg p-1 bg-lime-700 text-lime-100  mt-1  w-full outline-none'
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
                            className='pl-4 rounded-lg p-1 bg-lime-700 text-lime-100  mt-1  w-full outline-none'
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
                            className='pl-4 flex rounded-lg p-1 bg-lime-700 text-lime-100  mt-1  w-full outline-none'
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
                            className='pl-4 flex rounded-lg p-1 bg-lime-700 text-lime-100  mt-1  w-full outline-none'
                        />
                    </div>
                    <button type='submit' className='bg-white hover:bg-lime-600 hover:rounded-2xl transition-all ease-in-out duration-300 border border-lime-700 hover:text-xl hover:font-semibold p-2 rounded-lg flex max-h-11 justify-center gap-2 mt-7'>
                        Sign up
                    </button>
                </form>

                <h2 className='text-center mt-10'>
                    Or Signup with
                </h2>
                <button className='bg-white hover:bg-lime-600 hover:rounded-2xl transition-all ease-in-out duration-300 mt-2 border border-lime-700 hover:text-xl hover:font-semibold p-2 rounded-lg flex max-h-11 justify-center gap-2'>
                    <img src={Google} className='h-full' /> Google
                </button>
                <button className='bg-white hover:bg-lime-600 hover:rounded-2xl transition-all ease-in-out duration-300 mt-2 border border-lime-700 hover:text-xl hover:font-semibold p-2 rounded-lg flex max-h-11 justify-center gap-2'>
                    <img src={Facebook} className='h-full' /> Facebook
                </button>
                <button className='bg-white hover:bg-lime-600 hover:rounded-2xl transition-all ease-in-out duration-300 mt-2 border border-lime-700 hover:text-xl hover:font-semibold p-2 rounded-lg flex max-h-11 justify-center gap-2'>
                    <img src={Discord} className='h-full' /> Discord
                </button>
                <Link to="/login" className='text-center mt-6'>Already a User?</Link>
            </div>

        </div>
    )
}

export default SignupForm