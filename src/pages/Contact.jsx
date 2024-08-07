import React from 'react'

function Contact() {
    return (
        <div className='w-full h-auto mt-1 flex flex-col items-center overflow-scroll no-scrollbar mb-10 sm:mb-7 text-gray-900'>
            <div className='w-11/12 sm:w-2/3 max-w-xl mt-10 p-8 border border-gray-500 rounded-2xl bg-lime-200 bg-opacity-90 flex flex-col'>
                <div className=''>
                    <h1 className='text-xl'>
                        <span className=' font-bold italic'>FoodFinder</span> Contact Form
                    </h1>
                    <h2 className='text-lg mt-2 text-lime-900'>
                        Than you for showing interest in FoodFinder
                    </h2>
                </div>

                <form className=' mt-9 flex flex-col'>
                    <div className='flex gap-3'>
                        <div className='flex flex-col'>
                            <label htmlFor='firstname'>
                                First name
                            </label>
                            <input
                                name='firstname'
                                id='firstname'
                                required
                                placeholder='John'
                            
                                className=' pl-4 rounded-lg p-1 bg-lime-700 text-lime-100 mt-1  w-full outline-none'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='lastname'>
                                Last name
                            </label>
                            <input
                                name='lastname'
                                id='lastname'
                                placeholder='Lark'
                                
                                className='pl-4 rounded-lg p-1 bg-lime-700 text-lime-100  mt-1  w-full outline-none'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label htmlFor='email'>
                            Email
                        </label>
                        <input
                            name='email'
                            id='email'
                            type='email'
                            required
                            
                            placeholder='example@example.com'
                            className='pl-4 rounded-lg p-1 bg-lime-700 text-lime-100  mt-1  w-full outline-none'
                        />
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label htmlFor='password'>
                            Password
                        </label>
                        <input
                            name='password'
                            id='password'
                            type='password'
                            required
                           
                            placeholder='*********'
                            className='pl-4 flex rounded-lg p-1 bg-lime-700 text-lime-100  mt-1  w-full outline-none'
                        />
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label htmlFor='location'>
                            Location
                        </label>
                        <input
                            name='location'
                            id='location'
                            type='text'
                            required
                            
                            placeholder='Pune, Maharasthra'
                            className='pl-4 flex rounded-lg p-1 bg-lime-700 text-lime-100  mt-1  w-full outline-none'
                        />
                    </div>
                    <button type='submit' className='bg-white hover:bg-lime-600 hover:rounded-2xl transition-all ease-in-out duration-300 border border-lime-700 hover:text-xl hover:font-semibold p-2 rounded-lg flex max-h-11 justify-center gap-2 mt-7'>
                        Send Details
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Contact