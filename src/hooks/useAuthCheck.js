import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { authenticateUser } from '../reduxSilces/UserSlice.js';


function useAuthCheck () {
    let dispatch = useDispatch();
    let [data, setData] = useState();
    let authStatusChecker = async() => {
        let response = await fetch('https://food-finder-backend-guie.onrender.com/loginuser/status', {
            method:'GET',
            credentials:'include'
        })
        let data = await response.json();
        console.log(data);
        
        if(data.email) {
            setData(data);
            dispatch(authenticateUser(data));
        }
    }
    useEffect(() => {
        authStatusChecker();
    }, []);
    return {data};
}

export default useAuthCheck;