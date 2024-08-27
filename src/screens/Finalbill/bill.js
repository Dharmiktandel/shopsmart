// src/components/Bill/Bill.js
import React, { useState } from "react";
import "./bill.css"
import rewardd from "../../assets/reward.png"
import Navbar from "../../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";

const Bill = () => {
  const location = useLocation();
  const { billingDetails, fetchCartDetails, totalPrice } = location.state || {};

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleShareOrder = () => {
    const orderDetails = `Order Details: Total Price: ₹${totalPrice.toFixed(2)}\nItems: ${fetchCartDetails.map(cartItem => `${cartItem.title ? cartItem.title : cartItem.name} - ₹${cartItem.totalPrice.toFixed(2)}`).join("\n")}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(orderDetails)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div style={{
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Navbar />

      <div className="mainbilldiv">
        <div className="topdiv">
          <img style={{ marginBottom: 20 }} src={rewardd} alt="rew" />
          <div>
            <h1 style={{ color: "blue",fontFamily:"-moz-initial"}}>Order placed for ₹{totalPrice.toFixed(2)}</h1>
            <p style={{fontFamily:"-moz-initial",fontSize:15}}>Your item will be delivered soon</p>
          </div>
        </div>
        <div className="middlediv">
          <div style={{ marginTop: 20, marginLeft: 20, width: 450, marginBottom: 20 }}>
            <h4 style={{ fontWeight: 800,fontFamily:"-moz-initial" }}>Delivery Address</h4>
            <span style={{ fontWeight: 550,fontFamily:"-moz-initial" }}>Name: {billingDetails?.name}</span><br />
            <span style={{fontFamily:"-moz-initial"}}>Street Address: {billingDetails?.streetAddress}</span><br />
            <span style={{fontFamily:"-moz-initial"}}>Floor: {billingDetails?.apartment}</span><br />
            <span style={{fontFamily:"-moz-initial"}}>City: {billingDetails?.city}</span><br />
            <span style={{fontFamily:"-moz-initial"}}>Phone number: {billingDetails?.phone}</span><br />
            <span style={{fontFamily:"-moz-initial",}}>Email:</span>
            <span style={{fontFamily:"-moz-initial",color:"blue"}}>{billingDetails?.email}</span>
          </div>
          <hr style={{ border: "solid ", height: "90%" }} />
          <div style={{ marginTop: 40 }}>
            <span style={{ fontSize: 19,fontFamily:"-moz-initial" }}>Share order details </span>
            <button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleShareOrder}
              style={{
                fontSize: 17,
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                borderBlockColor: "gray",
                background: isHovered ? 'blue' : 'white',
                color: isHovered ? "white" : "blue",
                fontFamily:"-moz-initial"

              }}>
              Share Order
            </button><br /><br />
            <button className="fa fa-times-circle" style={{ color: "blue", background: "none", border: "none", fontSize: 17 }}> Cancel</button>
          </div>
        </div>

        <div className="lastdiv">
          <div style={{paddingTop:10,paddingLeft:10,}}>
            {fetchCartDetails?.map((cartItem) => (
              <div key={cartItem.id} style={{ }}>
                <div style={{ display: "flex", flexDirection: "row" , }}>
                  <img style={{ height: 35, width: 35 }} 
                  src={typeof cartItem.imagePreviewUrl === 'string' ? cartItem.imagePreviewUrl : (cartItem.imagePreviewUrl ? URL.createObjectURL(cartItem.imagePreviewUrl) : cartItem.thumbnail)} 
                  alt="item-thumbnail" />&nbsp;&nbsp;&nbsp;&nbsp;
                  <span style={{ color: "#000", fontSize: 20, fontWeight: '500', width: 500 }}>{cartItem.title ? cartItem.title : cartItem.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span style={{ color: "#000", fontSize: 20, fontWeight: 500 }}>₹ {cartItem.totalPrice.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
          <hr />
          <div style={{paddingBottom:10}}> 
          <span style={{ marginLeft: 645,fontWeight:550,fontSize:15 }}>Total: ₹{totalPrice.toFixed(2)}</span>
          </div>
       </div>
            
      </div>
    </div>
  );
};

export default Bill;
