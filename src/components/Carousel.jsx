import React, { useState, useEffect } from 'react'
import HillImg from '../assets/hill.jpg';
import MountImg from '../assets/mount.jpg';
import LightImg from '../assets/light.jpg';
function Carousel() {
    let [Img, setImg] = useState();
    let [imgIndex, setImgIndex] = useState(0);
    let arrImg = [HillImg, MountImg, LightImg]
    useEffect(() => {
        if (imgIndex >= arrImg.length) {
            setImgIndex(0);
        }
        setImg(arrImg[imgIndex]);
        const intervalId = setInterval(() => {
            setImgIndex(imgIndex + 1);
        }, 3000);
        return () => clearInterval(intervalId);
    }, [imgIndex]);
    return (
        <div className='relative w-full h-full overflow-hidden flex justify-center'>
            <img src={Img}
                className=' h-full w-full max-w-8xl custom-max-height'
            />
            <form className='absolute top-10 w-2/3 flex items-center justify-center'>
                <input placeholder='Search' className='w-full p-2 rounded-l-lg shadow-md shadow-black focus:outline-none text-lg'
                type='search'/>
                <button type='submit' 
                className='bg-green-500 p-2 shadow-md shadow-black rounded-r-lg text-lg -ml-1'>
                    Search
                </button>
            </form>
        </div>
    )
}

export default Carousel