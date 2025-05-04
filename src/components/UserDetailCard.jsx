import React from 'react'
import { Link } from 'react-router-dom'
import cart from '../assets/cart1.png'
import { useSelector } from 'react-redux'

function UserDetailCard({
    firstname = "John",
    email = 'John@example.com',
    location = "Pune, Maharashtra",
    className
}) {
    let { total } = useSelector(state => state.cart);
    return (
        <div className='absolute top-10 right-1/2'>
            <div className='flex flex-col w-auto p-2 rounded-xl bg-white shadow-xl shadow-black'>
                <p className='bg-gray-200 mt-2 p-1 rounded-lg'>Hello,  <span className='font-semibold text-xl text-lime-900'>{firstname}</span></p>
                <p className='bg-gray-200 mt-2 p-1 rounded-lg'> {email}</p>
                <p className='bg-gray-200 mt-2 p-1 rounded-lg'> {location}</p>
                <Link className='gap-2 items-center flex bg-gray-200 mt-2 p-1 rounded-lg relative' to="/cart">Cart
                    <img className='h-5' src={cart} />
                    <p className=' text-white bg-lime-600 rounded-md h-5 w-5 flex items-center justify-center'>{total}</p>
                </Link>
            </div>
        </div>
    )
}

export default UserDetailCard