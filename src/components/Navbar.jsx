import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../reduxSilces/UserSlice';


function Navbar() {
  let dispatch = useDispatch();
  let { isAuthenticated, email } = useSelector(state => state.user);
  console.log(isAuthenticated, email);

  let logoutCurrentUser = async () => {
    let response = await fetch('https://food-finder-backend-guie.onrender.com/logout', {
      method: 'POST',
      credentials: 'include'
    })
    
    dispatch(logoutUser());
  }

  let navActiveTransition = ' bg-white  text-green-950 opacity-95 rounded-lg p-1  transition-all duration-300 ease-in-out border-b-4 border-green-800 shadow-md shadow-green-500';
  let navInActiveTransition = 'text-black transition-all duration-200 ease-in-out border-0 border-green-800 rounded-lg p-1  hover:border hover:border-black hover:p-2 hover:bg-white';

  return (
    <div className='w-full h-auto sticky top-0 p-3 z-10'>
      <nav className='p-2 w-full bg-green-400 bg-opacity-90 flex flex-row rounded-xl overflow-hidden hover:p-3 transition-all duration-300 ease-in-out border border-black '>
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
            <p className='font-bold text-2xl rounded-lg italic shadow-md shadow-green-700  text-center bg-white bg-opacity-90 pr-1 pl-1'>FoodFinder</p>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar