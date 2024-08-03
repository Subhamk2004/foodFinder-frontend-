import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='w-screen h-32 wheat-color  fixed z-10 bottom-0 rounded-tl-3xl rounded-tr-3xl'>
      <div className='flex -flex-row w-full justify-center mb-4'>
        <ul className='flex flex-row gap-5 text-lg mt-5'>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/">Terms&Conditions</NavLink>
          </li>
          <li>
            <NavLink to="/">Privacy Policy</NavLink>
          </li>
        </ul>
      </div>
      <div className='w-full flex p-2 justify-center flex-row gap-3'>
        <NavLink to="/" className="bg-orange-600 p-1 rounded-lg shadow-orange-900  shadow-md ">
          <p className='font-bold text-2xl italic text-center text-black'>FoodFinder</p>
        </NavLink>
        <div className='flex justify-center items-center text-xl'>
          &copy; 2023 FoodieApp. All rights reserved.
        </div>
      </div>

    </div>
  )
}

export default Footer