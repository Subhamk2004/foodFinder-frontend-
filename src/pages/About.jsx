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
                        <img src={ayush} className='' />
                        <p className='rounded-lg sm:rounded-none  text-sm sm:text-lg flex sm:justify-center w-full p-1 bg-white'>Ayush H<br /> (Founder)</p>
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
                        I myself fully designed and developed the website as a part of my learning journey. The website is built using the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js. This project has been a significant learning experience for me, allowing me to apply my skills in web development and create a platform that connects food enthusiasts with their favorite restaurants.
                    </p>
                    <p className='text-sm sm:text-lg mt-4'>
                        <span className='bg-lime-400'>FoodFinder</span> is your ultimate culinary companion. We're passionate about connecting food lovers with the best eateries in town. Our app is designed to simplify your food search, offering a platform where you can effortlessly discover new restaurants, explore diverse cuisines.
                    </p>

                </div>
            </div>
           
        </>

    )
}

export default About