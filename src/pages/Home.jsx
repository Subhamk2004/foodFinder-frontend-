import React from 'react'
import Card from '../components/Card.jsx'
import Carousel from '../components/Carousel.jsx'
import useAuthCheck from '../hooks/useAuthCheck.js'

function Home() {
  useAuthCheck();
  
  
  return (
    <div className=" w-full overflow-scroll mb-36 no-scrollbar flex flex-col justify-center items-center gap-y-8">
      {/* <AppleCardsCarouselDemo /> */}
      <Carousel/>
      <div className='flex flex-wrap justify-around gap-y-8 gap-x-2'>
        <Card Price={199}
        ItemName={"Chicken Tikka"}
      />
      <Card Price={199}
        ItemName={"Chicken Tikka"}
      />
      <Card Price={199}
        ItemName={"Chicken Tikka"}
      />
      <Card Price={199}
        ItemName={"Chicken Tikka"}
      />
      </div>
      
    </div>
  )
}

export default Home
