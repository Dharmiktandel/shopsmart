import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import banner from '../../assets/banner-2.png';
import "./Signin.css";
import { useDispatch, useSelector } from "react-redux";
import { setSignin } from "../../redux/action";
import { useNavigate } from "react-router";

const Signin = () => {
    const navv = useNavigate();
    const dispatch = useDispatch();
    // const signupdataa = useSelector((state)=> state.signuped.signupData)
    const signupdataa = useSelector((state)=> state.signuped.signupData)
    console.log('signupdataasignupdataa',signupdataa)
  
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")

    const[errors,seterrors] = useState("")

    function handlevalidation(e){
        e.preventDefault();
        if(signupdataa && signupdataa.email === email && signupdataa.password === password)
        {
            dispatch(setSignin(email,password))
            console.log("data");
            navv("/")
        }
        else{
            seterrors(validation())
            console.log("error");
        }
    }

    function validation() {
        const errors = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

        if (email === "") {
            errors.email = "Email is required";
        } else if (!emailPattern.test(email)) {
            errors.email = "Email format is invalid";
        }

        if (password === "") {
            errors.password = "Password is required";
        } else if (!passwordPattern.test(password)) {
            errors.password = "Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, and one digit";
        }

        return errors;
    }

    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>
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
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="par">{errors.email}</p>}
                        <br /><br />
                        <input
                            className="inputpwd"
                            type="password"
                            placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <p className="par">{errors.password}</p>}
                        <br /><br /><br />
                        {errors.general && <p className="par">{errors.general}</p>}
                        <button onClick={handlevalidation} className="btnlogin">Login</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="forgetpwd">FORGET PASSWORD?</button>
                        <br /><br /><br />
                        <span style={{ fontSize: 15 }}>Don't have an account? <a href="./signup" style={{ background: "none", border: "none", color: "#063970" }}>Signup</a></span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signin;
