import Navigation from "../src/Navigation/Navigation";
import { useNavigate } from "react-router-dom";
import './MasterStyles.css';
import PreLoginNav from "./Navigation/PreLoginNav";
import React, { useState } from 'react';








function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then((response) => {
                if (response.status === 200) {
                    // Successful login
                    console.log('Logged in successfully');
                    navigate("/home")

                } else {
                    // Invalid credentials
                    console.log('Invalid email or password');
                    alert("Wrong Email or Password");
                }
            })
            .catch((error) => console.error(error));
    };

    return (
        <>
        <div>
                <PreLoginNav />
            </div>
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Log in</button>
            </form>
        </>
    );
}

export default Login;
