import React from 'react'
import { Link } from 'react-router-dom';
import Google from '../assets/google.png';
import Facebook from '../assets/facebook.png';
import Discord from '../assets/discord.png';

function LoginForm({
  handleSubmit,
  email,
  onEmailChange,
  password,
  onPasswordChange,
}) {
  return (
    <div className='w-full h-4/5 mt-1 flex flex-col items-center overflow-scroll no-scrollbar mb-7 text-gray-900'>
      <div className='w-2/3 max-w-xl mt-10 p-8 border border-gray-800 rounded-2xl bg-lime-200 bg-opacity-90 flex flex-col'>
        <div className=''>
          <h1 className='text-xl'>
            Welcome back to <span className=' font-bold italic'>FoodFinder</span>
          </h1>
        </div>

        <form onSubmit={handleSubmit} className=' mt-9 flex flex-col'>
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
              className='pl-4 rounded-lg p-1 bg-lime-700 text-lime-100 mt-1  w-full outline-none'
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
              className='pl-4 flex rounded-lg p-1 bg-lime-700 text-lime-100 mt-1  w-full outline-none'
            />
          </div>
          <button type='submit' className='bg-white hover:bg-lime-600 hover:rounded-2xl transition-all ease-in-out duration-300 border border-lime-700 hover:text-xl hover:font-semibold p-2 rounded-lg flex max-h-11 justify-center gap-2 mt-7'>
            Login
          </button>
        </form>

        <h2 className='text-center mt-10'>
          Or continue with
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
        <Link to="/signup" className='text-center mt-6'>New to FoodFinder?</Link>
      </div>

    </div>
  )
}

export default LoginForm