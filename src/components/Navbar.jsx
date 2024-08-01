import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  let navActiveTransition = 'text-white bg-green-800 rounded-lg p-1  transition-all duration-300 ease-in-out  border-b-2 border-black';
  let navInActiveTransition = 'text-black transition-all duration-300 ease-in-out border-black';

  return (
    <div className='w-full h-auto sticky top-0 z-10'>
      <nav className='p-2 w-full bg-green-600 flex flex-row'>
        <ul className='flex flex-row gap-5 text-lg w-3/4 '>
          <li className=''>
            <NavLink to="/"
              className={({ isActive }) => isActive ?
                `${navActiveTransition}` : `${navInActiveTransition}`}>Home</NavLink>
          </li>
          <li>
            <NavLink to="about"
              className={({ isActive }) => isActive ?
                `${navActiveTransition}` : `${navInActiveTransition}`}>About</NavLink>
          </li>
          <li>
            <NavLink to="contact"
              className={({ isActive }) => isActive ?
                `${navActiveTransition}` : `${navInActiveTransition}`}>Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="login"
              className={({ isActive }) => isActive ?
                `${navActiveTransition}` : `${navInActiveTransition}`}>Login</NavLink>
          </li>
        </ul>
        <div className='w-1/4 flex justify-end'>
          <NavLink to="/" className="w-full flex justify-end">
            <p className='font-bold text-2xl italic shadow-lg shadow-green-800 w-2/3 text-center'>FoodFinder</p>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar