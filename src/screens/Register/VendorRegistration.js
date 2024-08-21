// src/pages/Signup/Signup.jsx
import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/footer";
import banner from '../../assets/imageee.jpg';
import "./CustomerRegistration.css";
import {  setVendorRegisterData,  } from "../../redux/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import customerr from '../../assets/customer.png';

const VendorRegistration = () => {
    const [productimage,setProductimage] = useState(null);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [vendorEmail, setVendorEmail] = useState("");
    const [vendorPassword, setVendorPassword] = useState("");
    const [shopname, setShopName] = useState("");
    const [category,setCategory] = useState("")
    const [shopaddress, setShopAddress] = useState("");
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();
    const goToLogin = useNavigate();

    const validation = () => {
        const errors = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
         

       

        if (!productimage) {
            errors.productimage = "Image is required";
        } else if (!['image/jpeg', 'image/png'].includes(productimage.type)) {
            errors.productimage = "Only JPG and PNG images are allowed";
        } else if (productimage.size > 30 * 1024 * 1024) {
            errors.productimage = "Image size should not exceed 5MB";
        }


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
        if (!category) {
            errors.category = "category  is required";
        } else if (category.match(/[0-9]/)) {
            errors.category = "Please enter a valid category name";
        }

        if (!shopaddress) {
            errors.shopaddress = "shop address is required";
        } else if (shopaddress.match(/[0-9]/)) {
            errors.shopaddress = "Please enter a valid shopaddress ";
        }

        if (!phone) {
            errors.phone = "Phone number is required";
        } else if (phone.match(/^[a-zA-Z]*$/) || phone.length !== 10) {
            errors.phone = "Please enter a valid 10-digit phone number";
        }



        if (!vendorEmail) {
            errors.vendorEmail = "Email is required";
        } else if (!emailPattern.test(vendorEmail)) {
            errors.vendorEmail = "Please enter a valid email address";
        }

        if (!vendorPassword) {
            errors.vendorPassword = "Password is required";
        } else if (!passwordPattern.test(vendorPassword)) {
            errors.vendorPassword = "Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, and one digit";
        }

        return errors;
    };
    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     setImage(file);
    // };
    const handleProductImageChange = (e) => {
        const file = e.target.files[0];
        setProductimage(file);
    };
    

        

    const handleVendorValidation = (e) => {
        e.preventDefault();

        const vendorRegisterData = {productimage, firstname, lastname,shopname,category, shopaddress,phone, vendorEmail, vendorPassword };
        
        
        const validationErrors = validation();
        
        if (Object.keys(validationErrors).length === 0) {
            
            dispatch(setVendorRegisterData(vendorRegisterData))
            
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
                    height: 790,

                    marginTop: 20,
                    display: "flex",
                    flexDirection: "column",
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20
                }}>
                    {productimage ? (
                        <div style={{ 
                            width: '100%', 
                            height: 100, 
                            // backgroundColor: 'yellow', 
                            // marginLeft: '15%',
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop:20,
                            alignItems: 'center' ,
                            // textAlign:"center"
                        }}>
                            <img 
                                src={URL.createObjectURL(productimage)} 
                                alt="Uploaded" 
                                style={{ maxHeight: '100%', maxWidth: '100%' }} 
                            />
                        </div>
                    ) : (
                        <div style={{ 
                            width: '100%', 
                            height: 100, 
                            // backgroundColor: 'yellow', 
                            // marginLeft: '15%',
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop:20,
                            alignItems: 'center' ,
                            // textAlign:"center"
                        }}>
                            <img 
                                src={customerr} 
                                alt="Uploaded" 
                                style={{ maxHeight: '100%', maxWidth: '100%' }} 
                            />
                        </div>
                    )}



                       



                    <input
                        style={{
                            width: 250,
                            marginLeft: 100,
                            borderTop: "none",
                            borderRight: "none",
                            borderLeft: "none",
                            background:'none',
                            fontSize: 15,
                           marginTop:20
                            // paddingLeft: 10
                        }}
                        type="file" 
                        accept="image/*"
                        onChange={handleProductImageChange}
                    />
                    {errors.productimage && <p className="paragraph">{errors.productimage}</p>}
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
                        placeholder="Category"
                        onChange={(e) => setCategory(e.target.value)}>

                    </input>
                    {errors.category && <p className="paragraph">{errors.category}</p>}
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
                        onChange={(e) => setVendorEmail(e.target.value)}>

                    </input>
                    {errors.vendorEmail && <p className="paragraph">{errors.vendorEmail}</p>}
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
                        onChange={(e) => setVendorPassword(e.target.value)}>

                    </input>
                    {errors.vendorPassword && <p className="paragraph">{errors.vendorPassword}</p>}
                    <br />
                    <button
                        style={{
                            marginLeft: 40,
                            background: "none",
                            width: 310,
                            height: 50,
                            color: "white",
                            backgroundColor: "black",
                            fontSize: 20,
                            marginTop:10
                        }}
                        onClick={handleVendorValidation}>
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



















