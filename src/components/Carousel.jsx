import React, { useState, useEffect } from 'react'
import ctikka from '../assets/ctikka.jpg';
import kpaneer from '../assets/kpaneer.jpg';
import burger from '../assets/burger.jpg';
function Carousel() {
    let [Img, setImg] = useState();
    let [imgIndex, setImgIndex] = useState(0);
    let arrImg = [ctikka, kpaneer, burger]

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

    let handleSubmitSearch = (e) => {
        e.preventDefault();
    }

    return (
        <div className='p-2 w-full'>
            <div className='relative w-full  max-carousel-h overflow-hidden flex justify-center rounded-3xl border border-black'>
                <img src={Img}
                    className=' h-full w-full max-w-8xl custom-max-height'
                />
                <form className='absolute top-10 w-11/12 sm:w-2/3 flex items-center justify-center'>
                    <div className='w-full flex flex-row  shadow-xl shadow-black rounded-xl overflow-hidden'>
                        <input placeholder='Search' className='w-full p-2 rounded-l-lg bg-white  focus:outline-none text-lg'
                            type='search' />
                        <button type='submit'
                            onClick={handleSubmitSearch}
                            className='bg-lime-400 p-2  rounded-r-lg text-lg '>
                            Search
                        </button>
                    </div>

                </form>
            </div>
        </div>

    )
}

export default Carousel