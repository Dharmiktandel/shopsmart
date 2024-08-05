// src/pages/Signup/Signup.jsx
import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/footer";
import banner from '../../assets/imageee.jpg';
import "./Signup.css";
import { setRegisterdata } from "../../redux/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();
    const nav = useNavigate();

    const validation = () => {
        const errors = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

        if (!firstname) {
            errors.firstname = "First name is required";
        } else if (firstname.match(/[0-9]/)) {
            errors.firstname = "Please enter a valid first name";
        }

        if (!lastname) {
            errors.lastname = "Last name is required";
        } else if (lastname.match(/[0-9]/)) {
            errors.lastname = "Please enter a valid last name";
        }

        if (!phone) {
            errors.phone = "Phone number is required";
        } else if (phone.match(/^[a-zA-Z]*$/) || phone.length !== 10) {
            errors.phone = "Please enter a valid 10-digit phone number";
        }

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

        const registerData = { firstname, lastname, phone, email, password };
        const validationErrors = validation();

        if (Object.keys(validationErrors).length === 0) {
            dispatch(setRegisterdata(registerData));
            nav("/signin"); // Redirect to signin page upon successful registration
            setErrors({});
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <>
            <Navbar />
            <div className="signupcontainer">
                <img style={{ height: 470, width: 850 }} src={banner} alt="bnrlogo" />
                <div className="registerform">
                    <span style={{ fontWeight: 900, fontSize: 30 }}>Create an account</span>
                    <br />
                    <span style={{ fontSize: 15, fontWeight: 500 }}>Enter your details below</span>
                    <br /><br /><br />
                    <input className="inpt" type="text" placeholder="Enter First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                    {errors.firstname && <p className="paragraph">{errors.firstname}</p>}
                    <br /><br />
                    <input className="inpt" type="text" placeholder="Enter Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                    {errors.lastname && <p className="paragraph">{errors.lastname}</p>}
                    <br /><br />
                    <input className="inpt" type="text" placeholder="Enter Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    {errors.phone && <p className="paragraph">{errors.phone}</p>}
                    <br /><br />
                    <input className="inpt" type="email" placeholder="Enter Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {errors.email && <p className="paragraph">{errors.email}</p>}
                    <br /><br />
                    <input className="inpt" type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {errors.password && <p className="paragraph">{errors.password}</p>}
                    <br /><br />
                    <button onClick={handleValidation} className="btnregister">Register</button>
                    <br /><br />
                    <span style={{ fontSize: 15 }}>Already have an account? <button onClick={()=>nav("/signin") } style={{ background: "none", border: "none", color: "#063970" }}> Login</button></span>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Signup;
