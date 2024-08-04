import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { authenticateUser } from '../reduxSilces/UserSlice.js';


function useAuthCheck() {
    let dispatch = useDispatch();
    let [data, setData] = useState();
    const authStatusChecker = async () => {
        try {
            let response = await fetch('https://food-finder-backend-guie.onrender.com/loginuser/status', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                // Handle HTTP errors
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            let data = await response.json();
            console.log(data);

            if (data.email) {
                setData(data);
                dispatch(authenticateUser(data));
            } else {
                console.error('No email in response data', data);
            }
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };
    useEffect(() => {
        authStatusChecker();
    }, []);
    return { data };
}

export default useAuthCheck;