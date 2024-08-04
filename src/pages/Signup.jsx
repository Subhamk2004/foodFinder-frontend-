import React from 'react'
import { useState } from 'react';
import SignupForm from '../components/SignupForm';
import AuthenticationSuccess from '../components/AuthenticationSuccess.jsx';

function Signup() {

    let [firstname, setFirstname] = useState("");
    let [lastname, setLastname] = useState("");
    let [email, setEmail] = useState("");
    let [location, setLocation] = useState("");
    let [password, setPassword] = useState("");

    let [data, setData] = useState();

    let handleSubmit = async (e) => {
        console.log('request sent');
        e.preventDefault();
        let response = await fetch('https://food-finder-backend-guie.onrender.com/registeruser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: `${email}`,
                password: `${password}`,
                firstname: `${firstname}`,
                lastname: `${lastname}`,
                location: `${location}`
            })
        })
        let newData = await response.json();
        setData(newData);
    }

    return (
        <>
            {data ? <AuthenticationSuccess from = "signup" /> : null}
            <SignupForm
                handleSubmit={handleSubmit}
                firstname={firstname}
                onFirstnameChange={(firstname) => setFirstname(firstname)}
                lastname={lastname}
                onLastnameChange={(lastname) => setLastname(lastname)}
                email={email}
                onEmailChange={(email) => setEmail(email)}
                location={location}
                onLocationChange={(location) => setLocation(location)}
                password={password}
                onPasswordChange={(password) => setPassword(password)}
            />
        </>
    )
}

export default Signup