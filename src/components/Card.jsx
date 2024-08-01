import React from 'react'
import DefaultImg from '../assets/mount.jpg';

function Card({
    CardImg = DefaultImg,
    Price = 299,
    ItemName = "Butter Paneer",
    Description = 'Lorem ipsum dolor sit amet, consectetur adip'
}) {
    return (
        <div className='w-1/3 min-w-80 max-w-96  p-2 border border-green-400 mt-2 rounded-lg bg-gray-700 shadow-lg shadow-gray-950 group'>
            <div className='transition-all duration-300 ease-in-out w-full  relative overflow-hidden '>
                <img src={CardImg}
                    className='w-full rounded-lg shadow-lg shadow-black opacity-100 group-hover:opacity-30 transition-all duration-300 ease-in-out' />
                <p className='p-2 transition-all duration-300 ease-in-out text-white absolute top-2/3 opacity-0 group-hover:top-0 group-hover:opacity-100 text-justify'>
                    {Description}
                </p>
            </div>
            <div className='flex w-full mt-1 items-center gap-2'>
                <div className='w-3/4'>
                    <p className='text-white text-lg font-semibold mt-3'>{ItemName}</p>
                    <p className='text-white'>Price: <span className='text-green-300 font-bold text-xl'>₹{Price}</span>
                    </p>
                </div>
                <select className='text-white shadow-md shadow-black bg-gray-900 rounded-lg h-10 pr-1 pl-1'>
                    <option>Quantity</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
                <select className='text-white shadow-md shadow-black bg-gray-900 rounded-lg h-10 pr-1 pl-1'>
                    <option>Portion</option>
                    <option>Full</option>
                    <option>Half</option>
                    <option>Quarter</option>
                </select>
            </div>


        </div>
    )
}

export default Card