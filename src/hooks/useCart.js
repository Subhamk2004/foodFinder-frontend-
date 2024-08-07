import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, addToCart } from "../reduxSilces/cartSlice.js";

let useCart = () => {
    let { email } = useSelector(state => state.user)
    let {total} = useSelector(state => state.cart)
    console.log(total);
    
    let dispatch = useDispatch();
    
    let [cart, setCart] = useState([]);
    let fetchCart = async () => {
        try {
            let response = await fetch(`https://food-finder-backend-guie.onrender.com/cart?email=${encodeURIComponent(email)}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });
            let data = await response.json();
            setCart(data);
            console.log("Fetched cart data:", data);
            dispatch(addToCart(data.length));

        } catch (error) {
            console.log('Error fetching cart', error);
            setCart([]);  // Set to empty array in case of error
        }
    }

    useEffect(() => {
        if (email) {
            fetchCart();
        }
    }, [email,total])

    return { cart };
}

export default useCart;