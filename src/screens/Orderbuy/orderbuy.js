import React, { useState } from "react";
import "./orderbuy.css";
import Navbar from "../../components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPlacedOrder } from "../../redux/action";

const Orderbuy = () => {
  const fetchCartDetails = useSelector(state => state.cartDetails.detailedItems);
  const totalPrice = useSelector(state => state.totalPrice.totalPrice);

  const getNameEmailData = useSelector((state) => state.signuped.user);

  const [billingDetails, setBillingDetails] = useState({
    name: "",
    streetAddress: "",
    apartment: "",
    city: "",
    phone: "",
    email: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails({ ...billingDetails, [name]: value });
  };

  const placedOrdered = {billingDetails, fetchCartDetails, totalPrice}

  const handlePlaceOrder = () => {

    dispatch(setPlacedOrder(placedOrdered))
    console.log('data redux ma giya')
    console.log('data navigate thavana bill par')
    navigate("/bill", { state: { billingDetails, fetchCartDetails, totalPrice } });
    console.log('data navigate thay giya')
  };

  return (
    <>
      <Navbar />
      <div className="billconatiner">
        <div className="billdtl">
          <h3 style={{ fontWeight: 1000 }}>Billing Details</h3><br />
          <span style={{ fontWeight: "800" }}>Name</span><br />
          <input
            style={{ border: "none", background: "#f2f2f2", padding: 5, width: 300 }}
            type="text"
            name="name"
            value={`${getNameEmailData.firstname} ${getNameEmailData.lastname}`}
            // onChange={handleInputChange}
          /><br /><br />
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
            value={getNameEmailData.email}
            // onChange={handleInputChange}
          /><br /><br />
        </div>
        <div style={{ marginTop: 130 }}>
          {fetchCartDetails && fetchCartDetails.length > 0 ? (
            fetchCartDetails.map((cartItem) => (
              <div key={cartItem.id} style={{ marginTop: 10, marginLeft: 200 }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <img
                    src={typeof cartItem.imagePreviewUrl === 'string' ? cartItem.imagePreviewUrl : (cartItem.imagePreviewUrl ? URL.createObjectURL(cartItem.imagePreviewUrl) : cartItem.thumbnail)}
                    alt={cartItem.title}
                    style={{ height: 35, width: 35 }}
                  />&nbsp;&nbsp;
                  <span style={{ color: "#000", fontSize: 20, fontWeight: '500', width: 500 }}>
                    {cartItem.title ? cartItem.title : cartItem.name}
                  </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span style={{ color: "#000", fontSize: 20, fontWeight: 500 }}>
                    ₹ {cartItem.totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p style={{ marginLeft: 200 }}>No items in the cart.</p>
          )}
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
