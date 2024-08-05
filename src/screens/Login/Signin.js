// src/pages/Signin/Signin.jsx
import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import banner from '../../assets/imageee.jpg';
import "./Signin.css";
import { useDispatch, useSelector } from "react-redux";
import { setSignin } from "../../redux/action";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const navv = useNavigate();
    const dispatch = useDispatch();
    const dharusers = useSelector((state) => state.signuped.users);
    console.log('users',dharusers);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const handleValidation = (e) => {
        e.preventDefault();
        const user = dharusers.find(
            u => u.email === email && u.password === password
        );
        if (user) {
            dispatch(setSignin(email, password));
            navv("/");
        } else {
            setErrors({ general: "Invalid credentials. Please try again." });
        }
    };

    const handelSignup = ()=> {
        navv('/signup')
    }

    return (
        <>
            <Navbar />
            <div className="loginsubcontainer">
                <img style={{ height: 400, width: 800 }} src={banner} alt="bnrlogo" />
                <div className="loginform">
                    <span style={{ fontWeight: 900, fontSize: 30 }}>Log in to Exclusive</span>
                    <br />
                    <span style={{ fontSize: 15, fontWeight: 500 }}>Enter your details below</span>
                    <br /><br /><br />
                    <input
                        className="inpttxt"
                        type="text"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br /><br />
                    <input
                        className="inputpwd"
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br /><br /><br />
                    {errors.general && <p className="par">{errors.general}</p>}
                    <button onClick={handleValidation} className="btnlogin">Login</button>
                    <br /><br /><br />
                    <span style={{ fontSize: 15 }}>Don't have an account? <button onClick={handelSignup} style={{ background: "none", border: "none", color: "#063970" }}>Signup</button></span>
                </div>
            </div>
        </>
    );
};

export default Signin;
