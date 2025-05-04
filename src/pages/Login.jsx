import React from 'react'
import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import AuthenticationSuccess from '../components/AuthenticationSuccess.jsx';
function Login() {

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [data, setData] = useState();

  let handleSubmit = async (e) => {
    console.log('request sent');
    e.preventDefault();
    let response = await fetch('https://food-finder-backend-guie.onrender.com/loginuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: `${email}`,
        password: `${password}`,
      }),
      credentials: 'include'
    })
    let newData = await response.json();
    setData(newData);
  }

  return (
    <>
    {data ? <AuthenticationSuccess from = "login" /> : null}
      <LoginForm
        handleSubmit={handleSubmit}
        email={email}
        onEmailChange={(email) => setEmail(email)}
        password={password}
        onPasswordChange={(password) => setPassword(password)}
      />
    </>
  )
}

export default Login