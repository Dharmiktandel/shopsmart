// src/components/Orderbuy/Orderbuy.js
import React, { useState } from "react";
import "./orderbuy.css";
import Navbar from "../../components/Navbar/Navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Orderbuy = () => {
  const fetchCartDetails = useSelector(state => state.cartDetails.detailedItems);
  const totalPrice = useSelector(state => state.totalPrice.totalPrice);
  const [billingDetails, setBillingDetails] = useState({
    name: "",
    //companyName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    phone: "",
    email: "",
  });
  
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails({ ...billingDetails, [name]: value });
  };

  const handlePlaceOrder = () => {
    navigate("/bill", { state: { billingDetails, fetchCartDetails, totalPrice } });
  };

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="billconatiner">
        <div className="billdtl">
          <h3 style={{ fontWeight: 1000 }}>Billing Details</h3><br />
          <span style={{ fontWeight: "800" }}>Name</span><br />
          <input 
            style={{ border: "none", background: "#f2f2f2", padding: 5, width: 300 }} 
            type="text" 
            name="name" 
            value={billingDetails.name}
            onChange={handleInputChange}
          /><br /><br />
          {/* <span style={{ fontWeight: "800" }}>Company Name</span><br />
          <input 
            style={{ border: "none", background: "#f2f2f2", padding: 5, width: 300 }} 
            type="text" 
            name="companyName"
            value={billingDetails.companyName}
            onChange={handleInputChange}
          /><br /><br /> */}
          <span style={{ fontWeight: "800" }}>Street Address</span><br />
          <input 
            style={{ border: "none", background: "#f2f2f2", padding: 5, width: 300 }} 
            type="text" 
            name="streetAddress"
            value={billingDetails.streetAddress}
            onChange={handleInputChange}
          /><br /><br />
          <span style={{ fontWeight: "800" }}>Apartment, floor etc..</span><br />
          <input 
            style={{ border: "none", background: "#f2f2f2", padding: 5, width: 300 }} 
            type="text" 
            name="apartment"
            value={billingDetails.apartment}
            onChange={handleInputChange}
          /><br /><br />
          <span style={{ fontWeight: "800" }}>City</span><br />
          <input 
            style={{ border: "none", background: "#f2f2f2", padding: 5, width: 300 }} 
            type="text" 
            name="city"
            value={billingDetails.city}
            onChange={handleInputChange}
          /><br /><br />
          <span style={{ fontWeight: "800" }}>Phone Number</span><br />
          <input 
            style={{ border: "none", background: "#f2f2f2", padding: 5, width: 300 }} 
            type="text" 
            name="phone"
            value={billingDetails.phone}
            onChange={handleInputChange}
          /><br /><br />
          <span style={{ fontWeight: "800" }}>Email Address</span><br />
          <input 
            style={{ border: "none", background: "#f2f2f2", padding: 5, width: 300 }} 
            type="email" 
            name="email"
            value={billingDetails.email}
            onChange={handleInputChange}
          /><br /><br />
        </div>
        <div style={{ marginTop: 130 }}>
          {fetchCartDetails.map((cartItem) => (
            <div key={cartItem.id} style={{ marginTop: 10, marginLeft: 200 }}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <img style={{ height: 35, width: 35 }} src={cartItem.thumbnail} alt="item-thumbnail" />&nbsp;&nbsp;
                <span style={{ color: "#000", fontSize: 20, fontWeight: '500', width: 500 }}>{cartItem.title}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span style={{ color: "#000", fontSize: 20, fontWeight: 500 }}>₹ {cartItem.totalPrice.toFixed(2)}</span>
              </div>
            </div>
          ))}
          <br />
          <hr style={{ marginLeft: 200 }} />
          <span style={{ color: "#000", fontSize: 20, fontWeight: '500', marginLeft: 200 }}>Total:</span>
          <span style={{ color: "#000", fontSize: 20, fontWeight: 500, marginLeft: 550 }}>₹ {totalPrice.toFixed(2)}</span>
          <br /><br />
          <button style={{ marginLeft: 200 }} className="btnporder" onClick={handlePlaceOrder}>Place Order</button>
        </div>
      </div>
    </>
  );
};

export default Orderbuy;
