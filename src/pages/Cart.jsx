import React, { useState, useEffect } from 'react';
import useCart from '../hooks/useCart.js';
import CartCard from '../components/CartCard.jsx';
import { useSelector } from 'react-redux';
function Cart() {
    const { cart } = useCart();
    let [totalPrice, setTotalPrice] = useState();
    let finalPrice = Number(0);

    useEffect(() => {
        let finalPrice = 0;
        if (cart.length > 0) {
            cart.forEach((item) => {
                finalPrice += item.price;
            });
        }
        setTotalPrice(finalPrice);
    }, [cart]);


    return (
        <div className='w-full p-2 flex flex-col items-center'>
            <div className='flex flex-wrap justify-around gap-y-8 gap-x-2 mb-4'>
                {cart.map((item) => (
                    <CartCard
                        cartid={item._id}
                        CardImg={item.img}
                        ItemName={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        potion={item.potion}
                    />
                ))}
            </div>
            <div className='w-auto flex rounded-xl mt-3 mb-3 p-5 pr-10 pl-10 bg-gray-200 flex-col gap-2 shadow-lg shadow-black'>
                <p>Items:</p>
                <ul>
                    {cart.map((item, index) => (
                        <li key={item._id} className='pl-5 pr-5 font-semibold p-2 m-1 bg-gray-300 rounded-lg'>
                            {index + 1}. {item.name} - {item.quantity} - {item.potion}
                        </li>
                    ))}
                </ul>
                <p>Total Price: <span className='text-xl font-bold text-green-700'>₹{totalPrice}</span></p>
                <p>Total Items: <span className='text-xl font-bold text-green-700'>{cart.length}</span></p>
            </div>
        </div>

    );
}

export default Cart;