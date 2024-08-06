import React from 'react'

function UserDetailCard({
    firstname = "John",
    email = 'John@example.com',
    location = "Pune, Maharashtra",
    className
}) {
    return (
        <div className='absolute top-10 right-1/2'>
            <div className='flex flex-col w-auto p-2 rounded-xl bg-white shadow-xl shadow-black'>
                <p className='bg-lime-300 mt-2 p-1 rounded-lg shadow-lg shadow-black'>Hello,  <span className='font-semibold text-xl text-lime-900'>{firstname}</span></p>
                <p className='bg-lime-300 mt-2 p-1 rounded-lg shadow-lg shadow-black'> {email}</p>
                <p className='bg-lime-300 mt-2 p-1 rounded-lg shadow-lg shadow-black'> {location}</p>
            </div>
        </div>
    )
}

export default UserDetailCard