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
    const signupdataa = useSelector((state)=> state.signuped.signupData);
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    function handleValidation(e) {
        e.preventDefault();
        if (signupdataa && signupdataa.email === email && signupdataa.password === password) {
            dispatch(setSignin(email, password));
            console.log("data");
            navv("/");
        } else {
            setErrors({ general: "Invalid credentials. Please try again." });
            console.log("error");
        }
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
