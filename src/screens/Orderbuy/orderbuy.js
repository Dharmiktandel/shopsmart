// src/components/Orderbuy/Orderbuy.js
import React from "react";
import "./orderbuy.css";
import Navbar from "../../components/Navbar/Navbar";
import { useSelector } from "react-redux";

const Orderbuy = () => {
  const fetchCart = useSelector(state => state.addtocartt.addtocartItems);
  const totalPrice = useSelector(state => state.totalPrice.totalPrice);

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="billconatiner">
        <div className="billdtl">
          <h3 style={{ fontWeight: 1000 }}>Billing Details</h3><br />
          <span style={{ fontWeight: "800" }}>Name</span><br />
          <input style={{ border: "none", background: "#f2f2f2", padding: 5, width: 300 }} type="text" /><br /><br />
          <span style={{ fontWeight: "800" }}>Company Name</span><br />
          <input style={{ border: "none", background: "#f2f2f2", padding: 5, width: 300 }} type="text" /><br /><br />
          <span style={{ fontWeight: "800" }}>Street Address</span><br />
          <input style={{ border: "none", background: "#f2f2f2", padding: 5, width: 300 }} type="text" /><br /><br />
          <span style={{ fontWeight: "800" }}>Apartment, floor etc..</span><br />
          <input style={{ border: "none", background: "#f2f2f2", padding: 5, width: 300 }} type="text" /><br /><br />
          <span style={{ fontWeight: "800" }}>City</span><br />
          <input style={{ border: "none", background: "#f2f2f2", padding: 5, width: 300 }} type="text" /><br /><br />
          <span style={{ fontWeight: "800" }}>Phone Number</span><br />
          <input style={{ border: "none", background: "#f2f2f2", padding: 5, width: 300 }} type="text" /><br /><br />
          <span style={{ fontWeight: "800" }}>Email Address</span><br />
          <input style={{ border: "none", background: "#f2f2f2", padding: 5, width: 300 }} type="email" /><br /><br />
        </div>
        <div style={{ marginTop: 130 }}>
          {fetchCart.map((cartItem) => (
            <div key={cartItem.id} style={{ marginTop: 10, marginLeft: 200 }}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <img style={{ height: 35, width: 35 }} src={cartItem.thumbnail} alt="item-thumbnail" />&nbsp;&nbsp;
                <span style={{ color: "#000", fontSize: 20, fontWeight: '500', width: 500 }}>{cartItem.title}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span style={{ color: "#000", fontSize: 20, fontWeight: 500 }}>{cartItem.price}</span>
              </div>
            </div>
          ))}
          <br />
          <hr style={{ marginLeft: 200 }} />
          <span style={{ color: "#000", fontSize: 20, fontWeight: '500', marginLeft: 200 }}>Subtotal:</span>
          <span style={{ color: "#000", fontSize: 20, fontWeight: 500, marginLeft: 520 }}>₹ {totalPrice.toFixed(2)}</span>
          <br /><br />
          <button style={{ marginLeft: 200 }} className="btnporder">Place Order</button>
        </div>
      </div>
    </>
  )
}

export default Orderbuy;
