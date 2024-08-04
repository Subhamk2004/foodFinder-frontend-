import React from 'react'
import Card from '../components/Card.jsx'
import Carousel from '../components/Carousel.jsx'
import useAuthCheck from '../hooks/useAuthCheck.js'
import useFoodItems from '../hooks/useFoodItems.js'

function Home() {
  useAuthCheck();
  let { foodItems } = useFoodItems();
  if (foodItems.length > 0) console.log(foodItems);



  return (
    <div className=" w-full overflow-scroll mb-36 no-scrollbar flex flex-col justify-center items-center gap-y-8">
      <Carousel />
      <div className='flex flex-wrap justify-around gap-y-8 gap-x-2'>
        {foodItems.map((item) => (
          <Card
          CardImg={item.img}
          ItemName={item.name}
          Description={item.description}
          Price={item.options[0].full ? item.options[0].full : item.options[0].regular}
          potion={Object.keys(item.options[0])}
          />
        ))}
      </div>

    </div>
  )
}

export default Home
