// src/pages/Signin/Signin.jsx
import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import banner from '../../assets/imageee.jpg';
import customerrr from '../../assets/customer.png';
import "./Signin.css";
import { useDispatch, useSelector } from "react-redux";
import { setSignin } from "../../redux/action";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const navv = useNavigate();
    const dispatch = useDispatch();
    const dharusers = useSelector((state) => state.signuped.users);
    console.log('users', dharusers);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const validation = () => {
        const errors = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

        if (!email) {
            errors.email = "Email is required";
        } else if (!emailPattern.test(email)) {
            errors.email = "Please enter a valid email address";
        }

        if (!password) {
            errors.password = "Password is required";
        } else if (!passwordPattern.test(password)) {
            errors.password = "Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, and one digit";
        }

        return errors;
    };


    const handleValidation = (e) => {
        e.preventDefault();
        const user = dharusers.find(
            u => u.email === email && u.password === password
        );
        const validationErrors = validation();

        if (Object.keys(validationErrors).length === 0) {
            if (user) {
                dispatch(setSignin(email, password));
                navv("/");
            } else {
                setErrors({ general: "Invalid credentials. Please try again." });
            }

        } else {
            setErrors(validationErrors);
        }
    };

    const handelSignup = () => {
        navv('/customerRegistration')
    }

    return (
        <>

            <Navbar />

            <div style={{
                display: "flex",
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>

                <div style={{

                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    paddingTop: 40
                }}>
                    <h1>Vendor</h1>
                    <div style={{
                        width: 400,
                        backgroundColor: "#f2f2f2",
                        height: 320,

                        marginTop: 20,
                        display: "flex",
                        flexDirection: "column",
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20
                    }}>
                        <img style={{
                            height: 100,
                            width: 100,
                            marginLeft: 130,
                            marginTop: 30
                        }}
                            src={customerrr}
                            alt="kkk"></img><br />
                        <input style={{
                            width: 310,
                            marginLeft: 40,
                            borderTop: "none",
                            borderRight: "none",
                            borderLeft: "none",
                            background: "none",
                            fontSize: 20,
                            paddingLeft: 10
                        }}
                            type="email"
                            placeholder="Email Id">

                        </input><br />
                        <input
                            style={{
                                width: 310,
                                marginLeft: 40,
                                borderTop: "none",
                                borderRight: "none",
                                borderLeft: "none",
                                background: "none",
                                fontSize: 20,
                                paddingLeft: 10
                            }}
                            type="password"
                            placeholder="Password">

                        </input><br />
                        <button
                            style={{
                                marginLeft: 40,
                                background: "none",
                                width: 310,
                                height: 50,
                                color: "white",
                                backgroundColor: "black",
                                fontSize: 20
                            }}>
                            LOGIN
                        </button><br /><br />

                        {/* <span style={{ fontSize: 15,marginLeft:60 }}>Don't have an account? <button onClick={handelSignup} style={{ background: "none", border: "none", color: "black" }}>Signup</button></span> */}
                    </div>
                    <button
                        style={{
                            width: 400,
                            backgroundColor: "#f2f2f2",
                            height: 100,

                            marginTop: 10,
                            justifyContent: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            border: "none",

                        }}>
                        REGISTER
                    </button>
                </div>
                <div
                    style={{

                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        paddingTop: 40
                    }}
                >
                    <h1>Customer</h1>
                    <div style={{
                        width: 400,
                        backgroundColor: "#f2f2f2",
                        height: 320,

                        marginTop: 20,
                        display: "flex",
                        flexDirection: "column",
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20
                    }}>
                        <img style={{
                            height: 100,
                            width: 100,
                            marginLeft: 130,
                            marginTop: 30
                        }}
                            src={customerrr}
                            alt="kkk"></img><br />
                        <input style={{
                            width: 310,
                            marginLeft: 40,
                            borderTop: "none",
                            borderRight: "none",
                            borderLeft: "none",
                            background: "none",
                            fontSize: 20,
                            paddingLeft: 10
                        }}
                            type="email"
                            placeholder="Email Id"
                            onChange={(e) => setEmail(e.target.value)}>

                        </input>
                        {errors.email && <p className="paragraph">{errors.email}</p>}
                        <br />
                        <input
                            style={{
                                width: 310,
                                marginLeft: 40,
                                borderTop: "none",
                                borderRight: "none",
                                borderLeft: "none",
                                background: "none",
                                fontSize: 20,
                                paddingLeft: 10
                            }}
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}>

                        </input>
                        {errors.password && <p className="paragraph">{errors.password}</p>}
                        <br />
                        <button
                            style={{
                                marginLeft: 40,
                                background: "none",
                                width: 310,
                                height: 50,
                                color: "white",
                                backgroundColor: "black",
                                fontSize: 20
                            }}
                            onClick={handleValidation}>
                            LOGIN
                        </button><br /><br />

                        {/* <span style={{ fontSize: 15,marginLeft:60 }}>Don't have an account? <button onClick={handelSignup} style={{ background: "none", border: "none", color: "black" }}>Signup</button></span> */}
                    </div>
                    <button
                        style={{
                            width: 400,
                            backgroundColor: "#f2f2f2",
                            height: 100,

                            marginTop: 10,
                            justifyContent: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            border: "none",

                        }}
                        onClick={handelSignup}>
                        REGISTER
                    </button>
                </div>


            </div>

        </>
    );
};

export default Signin;














{/* <div className="loginsubcontainer">
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
                    {errors.email && <p className="paragraph">{errors.email}</p>}
                    <br /><br />
                    <input
                        className="inputpwd"
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <p className="paragraph">{errors.password}</p>}
                    <br /><br /><br />
                    {errors.general && <p className="par">{errors.general}</p>}
                    <button onClick={handleValidation} className="btnlogin">Login</button>
                    <br /><br /><br />
                    <span style={{ fontSize: 15 }}>Don't have an account? <button onClick={handelSignup} style={{ background: "none", border: "none", color: "#063970" }}>Signup</button></span>
                </div>
            </div> */}