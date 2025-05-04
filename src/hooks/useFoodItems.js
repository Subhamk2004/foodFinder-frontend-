import { useEffect, useState } from "react";

export default function useFoodItems() {
    let [foodItems, setFoodItems] = useState([]);

    async function fetchFoodItems() {
        try {
            let response = await fetch('https://food-finder-backend-guie.onrender.com/fooditems');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            let data = await response.json();
            setFoodItems(data);
            
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }
    useEffect(() => {
        fetchFoodItems();
    }, []);

    return { foodItems };
}