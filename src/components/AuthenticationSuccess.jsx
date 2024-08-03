import React from 'react'
import { Link } from 'react-router-dom';
import Success from '../assets/authsuccess.webm'

function AuthenticationSuccess({
    from
}) {
    return (
        <div className='flex w-full flex-col justify-center items-center absolute h-4/5 overflow-hidden bg-gray-600 bg-opacity-40'>
            <div className='bg-amber-100 w-3/5 min-w-64  border border-black rounded-xl pt-10 pb-10 p-2 flex flex-col justify-center items-center'>
                <h2 className='text-3xl text-center'>Authentication Successful</h2>
                <video src={Success} autoPlay loop muted className='object-cover'></video>
                {from === 'signup' ? <Link to = '/login'>Login to <span className='italic font-semibold text-xl underline'>FoodFinder</span></Link>
                : <Link to = '/'>Welcome to <span className='italic font-semibold text-xl underline'>FoodFinder</span></Link>}
            </div>
        </div>
    )
}

export default AuthenticationSuccess;