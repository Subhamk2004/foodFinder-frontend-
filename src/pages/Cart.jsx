import React from 'react';
import useCart from '../hooks/useCart.js';
import CartCard from '../components/CartCard.jsx';
function Cart() {
    const { cart } = useCart();

    console.log("Cart in component:", cart);

    return (
        <div className='flex flex-wrap justify-around gap-y-8 gap-x-2 mb-4'>
            {cart.map((item) => (
                <CartCard
                    CardImg={item.img}
                    ItemName={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    potion={item.potion}
                />
            ))}
        </div>
    );
}

export default Cart;