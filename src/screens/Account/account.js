// src/pages/Account/Account.jsx
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./account.css";
import user from "../../assets/userr.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Account = () => {  
    const navv = useNavigate();

    function navig(){
        navv("/signin")
    }
    // Accessing the user information from the signuped slice of the state
    const loggedInUser = useSelector((state) => state.signuped.user);
    console.log('loggedInUser',loggedInUser);

    if (!loggedInUser) {
        //return <h1 style={{textAlign:"center",marginTop:200}}>Please log in to view your account information.</h1>
        return (
            <div style={{textAlign: "center", marginTop: 200,width:"100%"}}>
                <h1 style={{fontWeight:800}}>Please log in to view your account information.</h1>
                <button onClick={navig} style={{ marginTop: 20, padding: '10px 20px', fontSize: '16px',width:150,backgroundColor:"#063970",color:"white" }}>Login</button>
            </div>
        );
        
       
    }

    return (
        <>
            <Navbar />
            <div className="accountmaincontainer">
                <div className="rootcontainer">
                    <div className="leftsidediv">
                        <div className="Profile">
                            <img style={{ width: 50, height: 50, borderRadius:5 }} src={loggedInUser.image ? URL.createObjectURL(loggedInUser.image) : 'defaultImagePath.jpg'} alt="User" />
                            <div>
                                <span style={{ paddingLeft: 25,fontFamily:"-moz-initial" }}>Hello,</span>
                                <br />
                                <span style={{ paddingLeft: 25, fontWeight: 1000, fontSize: 20,fontFamily:"-moz-initial" }}>
                                    {`${loggedInUser.firstname} ${loggedInUser.lastname}`}
                                </span>
                            </div>
                        </div>
                        <div className="accountsetting">
                            <h3 style={{ paddingTop: 10, paddingLeft: 20,fontWeight:550,fontFamily:"-moz-initial" }}>MY ORDERS</h3>
                            <hr />
                            <h3 style={{ paddingLeft: 20,fontWeight:550,fontFamily:"-moz-initial" }}>ACCOUNT SETTINGS</h3>
                            <ul style={{ paddingLeft: 40,paddingTop:5  }}>
                                <li style={{fontSize:15,fontFamily:"-moz-initial"}}>Profile Information</li>
                                <li style={{fontSize:15,fontFamily:"-moz-initial"}}>Manage Address</li>
                                <li style={{fontSize:15,fontFamily:"-moz-initial"}}>Pan Card Information</li>
                            </ul>
                        </div>
                    </div>
                    <div className="rightsidediv">
                        <h2 style={{ fontWeight: 800,fontFamily:"-moz-initial" }}>Personal Information</h2>
                        <span style={{ fontSize: 20, fontWeight: 500,fontFamily:"-moz-initial",color:"gray" }}>First Name:</span>&nbsp;
                        <span style={{ fontSize: 20,fontFamily:"-moz-initial" }}>{loggedInUser.firstname}</span>
                        <br />
                        <span style={{ fontSize: 20, fontWeight: 500,fontFamily:"-moz-initial",color:"gray" }}>Last Name:</span>&nbsp;
                        <span style={{ fontSize: 20,fontFamily:"-moz-initial" }}>{loggedInUser.lastname}</span>
                        <br /><br />
                        <h2 style={{ fontWeight: 800,fontFamily:"-moz-initial" }}>Email Address</h2>
                        <span style={{ fontSize: 20,fontFamily:"-moz-initial",color:"blue" }}>{loggedInUser.email}</span>
                        <br /><br />
                        <h2 style={{ fontWeight: 800,fontFamily:"-moz-initial" }}>Mobile Number</h2>
                        <span style={{ fontSize: 20,fontFamily:"-moz-initial" }}>{loggedInUser.phone}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Account;
