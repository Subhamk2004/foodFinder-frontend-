import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Footer() {
  let { isAuthenticated, location } = useSelector(state => state.user);
  return (
    <div className='w-screen bg-lime-300 flex flex-col items-center  border-black bg-opacity-95 z-10'>
      <div className='w-11/12 h-auto flex'>
        <div className='w-full flex flex-col pt-3 justify-start gap-3'>
          <NavLink to="/" className="bg-white w-1/2 min-w-44 max-w-60 p-1 rounded-lg shadow-green-900  shadow-md ">
            <p className='font-bold text-2xl italic text-center text-black'>FoodFinder</p>
          </NavLink>
          {!isAuthenticated ?
            <div className=' flex gap-2'>
              <Link to="/login" className='p-2 hover:border hover:border-black transition-all duration-300 ease-in-out rounded-3xl pl-5 pr-5 bg-white'>Login</Link>
              <Link to="/signup" className='p-2 hover:border hover:border-black transition-all duration-300 ease-in-out rounded-3xl pl-4 pr-4 bg-lime-500 '>Signup</Link>
            </div> : 
            <div>{location}</div>
         }


        </div>
        <div className='flex flex-row w-full   justify-end'>
          <ul className='flex flex-col gap-1 text-lg p-3 text-gray-900 items-end'>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="about">About</NavLink>
            </li>
            <li>
              <NavLink to="contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <hr className=' bg-gray-500 border border-gray-400  w-11/12 mt-5 mb-5' />

      <div className='pb-4 flex w-11/12  flex-wrap text-lg text-gray-900'>
        <p className='w-1/2'>&copy; 2023 FoodieApp. All rights reserved</p>
        <Link to="/" className='w-1/2 flex justify-end'>Terms of Service</Link>
      </div>

    </div>
  )
}

export default Footer