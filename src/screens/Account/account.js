// src/pages/Account/Account.jsx
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./account.css";
import user from "../../assets/userr.png";
import { useSelector } from "react-redux";

const Account = () => {
    // Accessing the user information from the signuped slice of the state
    const loggedInUser = useSelector((state) => state.signuped.user);
    console.log('loggedInUser',loggedInUser);

    if (!loggedInUser) {
        return <p>Please log in to view your account information.</p>;
    }

    return (
        <>
            <Navbar />
            <div className="accountmaincontainer">
                <div className="rootcontainer">
                    <div className="leftsidediv">
                        <div className="Profile">
                            <img style={{ width: 40, height: 40 }} src={user} alt="User" />
                            <div>
                                <span style={{ paddingLeft: 25 }}>Hello,</span>
                                <br />
                                <span style={{ paddingLeft: 25, fontWeight: 1000, fontSize: 20 }}>
                                    {`${loggedInUser.firstname} ${loggedInUser.lastname}`}
                                </span>
                            </div>
                        </div>
                        <div className="accountsetting">
                            <h3 style={{ paddingTop: 10, paddingLeft: 20 }}>MY ORDERS</h3>
                            <hr />
                            <h3 style={{ paddingLeft: 20 }}>ACCOUNT SETTINGS</h3>
                            <ul style={{ paddingLeft: 40, listStyle: "none" }}>
                                <li>Profile Information</li>
                                <li>Manage Address</li>
                                <li>Pan Card Information</li>
                            </ul>
                        </div>
                    </div>
                    <div className="rightsidediv">
                        <h2 style={{ fontWeight: 800 }}>Personal Information</h2>
                        <span style={{ fontSize: 15, fontWeight: 500 }}>First Name:</span>&nbsp;
                        <span style={{ fontSize: 20 }}>{loggedInUser.firstname}</span>
                        <br />
                        <span style={{ fontSize: 15, fontWeight: 500 }}>Last Name:</span>&nbsp;
                        <span style={{ fontSize: 20 }}>{loggedInUser.lastname}</span>
                        <br /><br />
                        <h2 style={{ fontWeight: 800 }}>Email Address</h2>
                        <span style={{ fontSize: 20 }}>{loggedInUser.email}</span>
                        <br /><br />
                        <h2 style={{ fontWeight: 800 }}>Mobile Number</h2>
                        <span style={{ fontSize: 20 }}>{loggedInUser.phone}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Account;
