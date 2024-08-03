import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../reduxSilces/UserSlice';


function Navbar() {
  let dispatch = useDispatch();
  let { isAuthenticated, email } = useSelector(state => state.user);
  console.log(isAuthenticated, email);

  let logoutCurrentUser = async () => {
    let response = await fetch('http://localhost:5000/logout', {
      method: 'POST',
      credentials: 'include'
    })
    
    dispatch(logoutUser());
  }

  let navActiveTransition = ' bg-orange-500 bg-opacity-80 text-orange-950 opacity-95 rounded-lg p-1  transition-all duration-300 ease-in-out  border-b-4 border-orange-900 shadow-md shadow-gray-800';
  let navInActiveTransition = 'text-black transition-all duration-300 ease-in-out border-black';

  return (
    <div className='w-full h-auto sticky top-0 z-10'>
      <nav className='p-2 w-full wheat-color flex flex-row rounded-bl-xl rounded-br-xl overflow-hidden hover:p-5 transition-all duration-300 ease-in-out'>
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
          {!isAuthenticated ? <li>
            <NavLink to="login"
              className={({ isActive }) => isActive ?
                `${navActiveTransition}` : `${navInActiveTransition}`}>Login</NavLink>
          </li> :
            <li>
              <button className="" onClick={logoutCurrentUser}>Logout</button>
            </li>}
          {!isAuthenticated ? <li>
            <NavLink to="signup"
              className={({ isActive }) => isActive ?
                `${navActiveTransition}` : `${navInActiveTransition}`}>Sign up</NavLink>
          </li> :
            null}
        </ul>
        <div className='w-1/4 flex justify-end'>
          <NavLink to="/" className="w-full flex justify-end">
            <p className='font-bold text-2xl rounded-lg italic shadow-xl shadow-gray-700  text-center bg-orange-500 bg-opacity-80 pr-1 pl-1'>FoodFinder</p>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar