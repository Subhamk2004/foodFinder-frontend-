import React, { useEffect, useState } from 'react'
import DefaultImg from '../assets/burger.jpg';
import trash from '../assets/trash.png';
import { useDispatch } from 'react-redux';
import { deleteItem as updateIcon } from '../reduxSilces/cartSlice.js';

function CartCard({
    CardImg = DefaultImg,
    price,
    quantity,
    ItemName = "Butter Paneer",
    potion,
    cartid,
    Description = 'Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer…'
}) {

    let dispatch = useDispatch();
    let deleteItem = async (cartid) => {
        let response = await fetch(`https://food-finder-backend-guie.onrender.com/cart`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ _id: cartid })
        })
    }

    return (
        <div className='w-1/3 min-card-w max-w-96  p-2 border border-black mt-2 rounded-2xl bg-white shadow-md shadow-gray-500 group '
            key={cartid}>
            <div className='transition-all duration-300 ease-in-out w-full  relative overflow-hidden rounded-xl max-h-60'>
                <img src={CardImg}
                    id={CardImg}
                    className='w-full rounded-xl shadow-lg shadow-black opacity-100 group-hover:opacity-30 transition-all duration-300 ease-in-out ' />
                <p className='p-2 transition-all duration-300 ease-in-out text-gray-700 absolute top-2/3 opacity-0 group-hover:top-0 group-hover:opacity-100 text-justify'>
                    {Description}
                </p>
            </div>
            <div className='flex w-full mt-1 items-center gap-2'>
                <div className='w-3/4'>
                    <p className='text-gray-800 text-lg font-semibold mt-3' id={ItemName}>{ItemName}</p>
                    <p className='text-lg font-semibold'>Price: <span className='text-green-600 text-xl font-bold'>₹{price}</span></p>

                </div>
                <div className='flex gap-2'>
                    <p className='bg-lime-400 p-1 shadow-md shadow-black rounded-lg'>Quantity: {quantity}</p>
                    <p className='bg-lime-400 p-1 shadow-md shadow-black rounded-lg'>Potion: {potion}</p>
                </div>

            </div>
            <button className=' justify-center gap-2 flex w-full p-1 rounded-lg bg-red-400 text-lg items-center mt-1'
                onClick={(e) => {
                    console.log(cartid);
                    deleteItem(cartid);
                    dispatch(updateIcon(cartid));
                }}
            >
                Remove from Cart
                <img className='h-6' src={trash} />
            </button>


        </div>
    )
}

export default CartCard