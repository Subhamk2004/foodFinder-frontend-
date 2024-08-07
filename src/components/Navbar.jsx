import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../reduxSilces/UserSlice';
import userIcon from '../assets/user.png';
import UserDetailCard from './UserDetailCard.jsx';



function Navbar() {
  let [showUser, setShowUser] = useState(false);

  let dispatch = useDispatch();
  let { isAuthenticated, email, firstname, location } = useSelector(state => state.user);
  let { total } = useSelector(state => state.cart);
  console.log(total);
  let logoutCurrentUser = async () => {
    let response = await fetch('https://food-finder-backend-guie.onrender.com/logout', {
      method: 'POST',
      credentials: 'include'
    })

    dispatch(logoutUser());
  }

  let showUserFnc = () => {
    setShowUser(!showUser);
  }

  let navActiveTransition = ' bg-white  text-green-950 opacity-95 rounded-lg p-1  transition-all duration-300 ease-in-out border-b-4 border-green-800 shadow-md shadow-lime-500';
  let navInActiveTransition = 'text-black transition-all duration-200 ease-in-out border-0 border-green-800 rounded-lg p-1  sm:hover:border sm:hover:border-black      sm:hover:p-2 sm:hover:bg-white';

  return (
    <div className='w-full h-auto sticky top-0 p-1 sm:p-3 z-10'>
      <nav className='p-1 sm:p-2 w-full bg-lime-400 bg-opacity-90 flex flex-row rounded-xl  sm:hover:p-3 transition-all duration-300 ease-in-out border border-black '>
        <ul className='flex flex-row items-center gap-1 sm:gap-5 text-lg w-3/4 '>
          <li className=''>
            <NavLink to="/"
              className={({ isActive }) => isActive ?
                `${navActiveTransition}` : `${navInActiveTransition}`}>Home</NavLink>
          </li>
          <li className='hidden sm:flex'>
            <NavLink to="about"
              className={({ isActive }) => isActive ?
                `${navActiveTransition}` : `${navInActiveTransition}`}>About</NavLink>
          </li>
          <li className='hidden sm:flex'>
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
        <div className='w-1/4 flex justify-end gap-6 relative'>
          {isAuthenticated?  <button className='shadow-md shadow-lime-600 rounded-lg'
            onClick={showUserFnc}
          >
            <div className='w-9 h-9 relative'>
              <img className='h-9 min-w-9' src={userIcon} />
              <p className='-top-1 left-7 absolute text-white bg-gray-600 rounded-full h-5 w-5 flex items-center justify-center'>{total}</p>
            </div>
          </button> : null}
          {showUser ? <UserDetailCard
            firstname={firstname}
            location={location}
            email={email}
          /> : null}

          <NavLink to="/" className="flex justify-end">
            <p className='font-bold text-2xl rounded-lg italic shadow-md shadow-green-700  text-center bg-white bg-opacity-90 pr-1 pl-1'>FoodFinder</p>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar