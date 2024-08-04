import React from 'react'
import DefaultImg from '../assets/burger.jpg';

function Card({
    CardImg = DefaultImg,
    Price = 299,
    ItemName = "Butter Paneer",
    potion,
    Description = 'Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer…'
}) {
    console.log(potion);

    return (
        <div className='w-1/3 min-card-w max-w-96  p-2 border border-black mt-2 rounded-2xl bg-white shadow-md shadow-gray-500 group '>
            <div className='transition-all duration-300 ease-in-out w-full  relative overflow-hidden rounded-xl max-h-60'>
                <img src={CardImg}
                    className='w-full rounded-xl shadow-lg shadow-black opacity-100 group-hover:opacity-30 transition-all duration-300 ease-in-out ' />
                <p className='p-2 transition-all duration-300 ease-in-out text-gray-700 absolute top-2/3 opacity-0 group-hover:top-0 group-hover:opacity-100 text-justify'>
                    {Description}
                </p>
            </div>
            <div className='flex w-full mt-1 items-center gap-2'>
                <div className='w-3/4'>
                    <p className='text-gray-800 text-lg font-semibold mt-3'>{ItemName}</p>
                    <p className='text-gray-800'>Price: <span className='text-green-600 font-bold text-xl'>₹{Price}</span>
                    </p>
                </div>
                <select className=' shadow-md shadow-black bg-lime-400 rounded-lg h-10 pr-1 pl-1'>
                    <option>Quantity</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
                <select className="text-white shadow-md shadow-black bg-blue-600 rounded-lg h-10 pr-1 pl-1">
                    <option>Portion</option>
                    {potion && potion.map((potions) => (
                        <option key={potions} value={potions}>
                            {potions}
                        </option>
                    ))}
                </select>
            </div>


        </div>
    )
}

export default Card