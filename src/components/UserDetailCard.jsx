import React from 'react'
import { Link } from 'react-router-dom'
import cart from '../assets/cart1.png'

function UserDetailCard({
    firstname = "John",
    email = 'John@example.com',
    location = "Pune, Maharashtra",
    className
}) {
    return (
        <div className='absolute top-10 right-1/2'>
            <div className='flex flex-col w-auto p-2 rounded-xl bg-white shadow-xl shadow-black'>
                <p className='bg-gray-200 mt-2 p-1 rounded-lg'>Hello,  <span className='font-semibold text-xl text-lime-900'>{firstname}</span></p>
                <p className='bg-gray-200 mt-2 p-1 rounded-lg'> {email}</p>
                <p className='bg-gray-200 mt-2 p-1 rounded-lg'> {location}</p>
                <Link className='gap-2 items-center flex bg-gray-200 mt-2 p-1 rounded-lg' to="/cart">Cart <img className='h-5' src={cart}/></Link>
            </div>
        </div>
    )
}

export default UserDetailCard