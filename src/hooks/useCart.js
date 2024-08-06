import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

let useCart = () => {
    let { email } = useSelector(state => state.user)
    let [cart, setCart] = useState([]);  // Initialize with an empty array
    
    // For testing purposes only. Remove this in production.
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
        } catch (error) {
            console.log('Error fetching cart', error);
            setCart([]);  // Set to empty array in case of error
        }
    }

    useEffect(() => {
        if (email) {
            fetchCart();
        }
    }, [email])

    return { cart };
}

export default useCart;