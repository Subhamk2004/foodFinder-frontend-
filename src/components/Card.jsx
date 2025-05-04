import React, { useEffect, useState } from 'react'
import DefaultImg from '../assets/burger.jpg';
import cart from '../assets/cart.png';
import { useSelector, useDispatch } from 'react-redux';
import { refreshCart } from '../reduxSilces/cartSlice.js';

function Card({
    CardImg = DefaultImg,
    price,
    ItemName = "Butter Paneer",
    potion,
    full,
    Description = 'Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer…'
}) {

    let dispatch = useDispatch();
    let {email} = useSelector(state => state.user)
    console.log(email);
    
    console.log(potion, price, full);
    let [itemPrice, setItemPrice] = useState('');
    let [itemPotion, setItemPotion] = useState('Half');
    let [itemQuantity, setItemQuantity] = useState('1');

    let addToCart = async (imgId, itemname) => {
        console.log(email, itemQuantity, itemPotion, itemPrice, imgId, itemname);
        let response = await fetch('https://food-finder-backend-guie.onrender.com/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: itemname,
                price: itemPrice,
                potion: itemPotion,
                quantity: itemQuantity,
                img: imgId,
                email:email
            })
        })
    }

    useEffect(() => {
        setItemPrice(full[itemPotion])
    }, [itemPotion])

    console.log(itemQuantity, itemPotion, itemPrice);

    return (
        <div className='w-1/3 min-card-w max-w-96  p-2 border border-black mt-2 rounded-2xl bg-white shadow-md shadow-gray-500 group '>
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
                    <p className='text-lg font-semibold'>Price: <span className='text-green-600 text-xl font-bold'>₹</span><select className=" bg-white rounded-lg appearance-none text-green-600 font-bold text-xl"
                    value={itemPrice}
                    >
                        <option>{price[0]}</option>
                        {price && price.map((prices) => (
                            <option key={prices} value={prices}>
                                {prices}
                            </option>
                        ))}
                    </select></p>

                </div>
                <div className='flex gap-2'>
                    <select className=' shadow-md shadow-black bg-lime-400 rounded-lg h-10 pr-1 pl-1'
                        onChange={(e) => setItemQuantity(e.target.value)}
                    >
                        <option>Quantity</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                    <select className="text-white shadow-md shadow-black bg-blue-600 rounded-lg h-10 pr-1 pl-1"
                        onChange={(e) => {
                            setItemPotion(e.target.value)
                            console.log("inside onchange",itemPotion); 
                            setItemPrice(full[itemPotion])
                        }}
                    >
                        <option>Portion</option>
                        {potion && potion.map((potions) => (
                            <option key={potions} value={potions}>
                                {potions}
                            </option>
                        ))}
                    </select>
                </div>

            </div>
            <button className=' justify-center gap-2 flex w-full p-1 rounded-lg bg-lime-400 text-lg items-center'
                onClick={(e) => {
                    let parent  = e.target.parentElement;
                    console.log(parent);
                    let imgId = parent.children[0].children[0].id;
                    let itemname = parent.children[1].children[0].children[0].id;
                    
                    addToCart(imgId, itemname);
                    dispatch(refreshCart());
                }}
            >
                Add to Cart
                <img className='h-6' src={cart} />
            </button>


        </div>
    )
}

export default Card