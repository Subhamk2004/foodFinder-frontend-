import React from 'react'
import me from '../assets/me.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import mail from '../assets/mail.png';
import { Link } from 'react-router-dom';
import ayush from '../assets/ayush.jpeg';

function About() {
    return (
        <>
            <div className='z-10 w-full flex'>
                <div className=' p-1 sm:p-0 w-2/5 bg-gray-400 sm:rounded-t-lg h-full flex flex-col '>
                    <div className='sm:w-4/5 mt-1 sm:mt-3 top-24 flex flex-col items-center sm:border-gray-100  sm:border-8 sm:bg-gray-700 sm:ml-1'>
                        <img src={me} className='' />
                        <p className='rounded-lg sm:rounded-none  text-sm sm:text-lg flex justify-center w-full p-1 bg-white'>Subham Kumar (Founder)</p>
                    </div>
                    <div className=' sm:w-4/5 border mt-1 sm:mt-4 flex p-2 sm:ml-1 rounded-lg bg-gray-200 justify-around'>
                        <a className='' href="https://github.com/Subhamk2004" target='_blank'>
                            <img src={github} className='h-6 sm:h-7' />
                        </a>
                        <a className='' href="www.linkedin.com/in/subham-kumar-73b98b252" target='_blank'>
                            <img src={linkedin} className='h-6 sm:h-7' />
                        </a>
                        <a className='' href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=subhamrahar22@gmail.com.com" target='_blank'>
                            <img src={mail} className='h-6 sm:h-7' />
                        </a>
                    </div>
                    <div className='sm:w-4/5 mt-1 sm:mt-3 top-24 flex flex-col items-center sm:border-gray-100  sm:border-8 sm:bg-gray-700 sm:ml-1'>
                        <img src={ayush} className='' />
                        <p className='rounded-lg sm:rounded-none  text-sm sm:text-lg flex sm:justify-center w-full p-1 bg-white'>Ayush H<br /> (Co-Founder)</p>
                    </div>
                    <div className=' sm:w-4/5 border mt-1 sm:mt-4 flex p-2 sm:ml-1 rounded-lg bg-gray-200 justify-around'>
                        <a className='' href="https://github.com/Argus-66" target='_blank'>
                            <img src={github} className='h-6 sm:h-7' />
                        </a>
                        <a className='' href="https://www.linkedin.com/in/ayush-h-541948252/" target='_blank'>
                            <img src={linkedin} className='h-6 sm:h-7' />
                        </a>
                        <a className='' href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=jqghebri@gmail.com.com" target='_blank'>
                            <img src={mail} className='h-6 sm:h-7' />
                        </a>
                    </div>

                </div>
                <div className='w-3/5 flex flex-col items-center p-3 sm:p-6 text-justify'>
                    <h1 className='font-bold text-3xl'>About Us</h1>
                    <p className='text-sm sm:text-lg mt-4'>
                        We are a team of passionate developers and food enthusiasts who are dedicated to creating a delightful and user-friendly online food ordering platform. Our mission is to provide the best possible experience for our customers by offering a wide range of delicious and affordable dishes.
                    </p>
                    <p className='text-sm sm:text-lg mt-4'>
                        <span className='bg-lime-400'>FoodFinder</span> is your ultimate culinary companion. We're passionate about connecting food lovers with the best eateries in town. Our app is designed to simplify your food search, offering a platform where you can effortlessly discover new restaurants, explore diverse cuisines.
                    </p>

                    <p className='hidden sm:flex text-lg mt-10'>
                        <Link className='underline text-xl font-semibold'>Join the FoodFinder community</Link> and embark on a flavorful journey today!
                    </p>
                </div>
            </div>
            <p className='p-2 sm:hidden text-lg'>
                <Link className='underline text-xl font-semibold'>Join the FoodFinder community</Link> and embark on a flavorful journey today!
            </p>
        </>

    )
}

export default About