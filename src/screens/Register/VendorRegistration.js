// src/pages/Signup/Signup.jsx
import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/footer";
import banner from '../../assets/imageee.jpg';
import "./CustomerRegistration.css";
import { setRegisterdata } from "../../redux/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import customerr from '../../assets/customer.png';

const VendorRegistration = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [shopname, setShopName] = useState("");
    const [shopaddress, setShopAddress] = useState("");
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();
    const goToLogin = useNavigate();

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

        if (!shopname) {
            errors.shopname = "shop name is required";
        } else if (shopname.match(/[0-9]/)) {
            errors.shopname = "Please enter a valid shop name";
        }

        if (!shopaddress) {
            errors.shopaddress = "shop name is required";
        } else if (shopaddress.match(/[0-9]/)) {
            errors.shopaddress = "Please enter a valid shopaddress ";
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
            goToLogin("/signin"); // Redirect to signin page upon successful registration
            setErrors({});
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <>
            {/* <Navbar /> */}

            <div
                style={{

                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    paddingTop: 40
                }}
            >
                <h1>Vendor</h1>
                <div style={{
                    width: 400,
                    backgroundColor: "#f2f2f2",
                    height: 620,

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
                        src={customerr}
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
                        type="text"
                        placeholder="First Name "
                        onChange={(e) => setFirstname(e.target.value)}>

                    </input>
                    {errors.firstname && <p className="paragraph">{errors.firstname}</p>}
                    <br />
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
                        type="text"
                        placeholder="Last Name"
                        onChange={(e) => setLastname(e.target.value)}>

                    </input>
                    {errors.lastname && <p className="paragraph">{errors.lastname}</p>}
                    <br />
                    
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
                        type="text"
                        placeholder="Shop Name"
                        onChange={(e) => setShopName(e.target.value)}>

                    </input>
                    {errors.shopname && <p className="paragraph">{errors.shopname}</p>}
                    <br />

                    <textarea style={{
                        width: 310,
                        marginLeft: 40,
                        borderTop: "none",
                        borderRight: "none",
                        borderLeft: "none",
                        background: "none",
                        fontSize: 20,
                        paddingLeft: 10,
                        height:100
                    }}
                        type="text"
                        placeholder="Shop Address"
                        onChange={(e) => setShopAddress(e.target.value)}>

                    </textarea>
                    {errors.shopaddress && <p className="paragraph">{errors.shopaddress}</p>}
                    <br />





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
                        placeholder="Phone"
                        onChange={(e) => setPhone(e.target.value)}>

                    </input>
                    {errors.phone && <p className="paragraph">{errors.phone}</p>}
                    <br />
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
                        REGISTER
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
                    onClick={() => goToLogin("/signin")}>
                    LOGIN
                </button>
            </div>

        </>
    );
};

export default VendorRegistration;





















{/* <div className="signupcontainer">
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
<Footer /> */}