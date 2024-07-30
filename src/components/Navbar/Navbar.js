import React from "react";
import "./Navbar.css"
import logo from '../../assets/shopp.jpg';
import search from "../../assets/searchIcon.png";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
      <>
        <div className="header">
          <div className="logo">
          <Link to="/#">
          <img style={{ width: 170, height: 100, marginTop: -25 }} src={logo } alt="Logo" />
          </Link>
          </div>
          <div className="search">
              <input type="text" placeholder="Search Here"></input>
              <button className="btnSearch"><img style={{height:25,width:25}} src={search} alt="search"></img></button>
          </div>
          <div className="icons">
          <Link to="/signin" className="fa fa-user-circle">
            &nbsp;&nbsp;Login
          </Link>
          <Link to="/addtocart" className="fa fa-shopping-cart">
            &nbsp;&nbsp;Cart
          </Link>
        </div>
          
        </div>
       
        
      </>
    );
  };
  
  export default Navbar;