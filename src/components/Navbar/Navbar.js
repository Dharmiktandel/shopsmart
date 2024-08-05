// src/components/Navbar/Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Navbar.css";
import logo from '../../assets/shopp.jpg';
import search from "../../assets/searchIcon.png";
import { logout, setSignin } from "../../redux/action";

const Navbar = () => {
    const dispatch = useDispatch();
    const isAuthenticate = useSelector((state) => state.signuped.isAuthenticate);
    console.log('isAuthenticateisAuthenticate',isAuthenticate);

    const navig = useNavigate();

    const handleLogout = () => {
      dispatch(logout());
      navig("/signin"); // Redirect to the signin page after logout
  };

    return (
        <div className="header">
            <div className="logo">
                <Link to="/#">
                    <img style={{ width: 170, height: 100, marginTop: -25 }} src={logo} alt="Logo" />
                </Link>
            </div>
            <div className="search">
                <input type="text" placeholder="Search Here" />
                <button className="btnSearch">
                    <img style={{ height: 25, width: 25 }} src={search} alt="search" />
                </button>
            </div>
            <div className="icons">
                {isAuthenticate ? (
                    <>
                        <button onClick={handleLogout} className="fa fa-user-circle">
                            &nbsp;&nbsp;Logout
                        </button>
                        <button onClick={()=>navig('/productDetail')} className="fa fa-shopping-cart">
                            &nbsp;&nbsp;Cart
                        </button>
                    </>
                ) : (
                    <>
                        <button onClick={()=>navig('/signin')} className="fa fa-user-circle">
                            &nbsp;&nbsp;Login
                        </button>
                        <button onClick={()=>navig('/productDetail')} className="fa fa-shopping-cart">
                            &nbsp;&nbsp;Cart
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
