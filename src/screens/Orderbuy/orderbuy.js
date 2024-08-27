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
    name: `${getNameEmailData.firstname} ${getNameEmailData.lastname}`,
    streetAddress: "",
    apartment: "",
    city: "",
    phone: "",
    email: getNameEmailData.email,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};

    if (!billingDetails.streetAddress) {
      errors.streetAddress = "Street address is required";
    }

    if (!billingDetails.apartment) {
      errors.apartment = "Apartment is required";
    }

    if (!billingDetails.city) {
      errors.city = "City is required";
    } else if (/[0-9]/.test(billingDetails.city)) {
      errors.city = "City is invalid";
    }

    if (!billingDetails.phone) {
      errors.phone = "Phone number is required";
    } else if (/^[a-zA-Z]*$/.test(billingDetails.phone) || billingDetails.phone.length !== 10) {
      errors.phone = "Phone number is invalid";
    }

    return errors;
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails({ ...billingDetails, [name]: value });
  };

  const handlePlaceOrder = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const placedOrdered = {
      billingDetails,
      fetchCartDetails,
      totalPrice,
      getNameEmailData,
    };

    dispatch(setPlacedOrder(placedOrdered));
    console.log("setplaceorderrrr",placedOrdered);
    navigate("/bill", {
      state: { billingDetails, fetchCartDetails, totalPrice, getNameEmailData },
    });
  };

  return (
    <>
      <Navbar />
      <div className="billconatiner">
        <div className="billdtl">
          <h3 style={{ fontWeight: 1000,fontFamily:"-moz-initial" }}>Billing Details</h3><br />
          <span style={{ fontWeight: "800" ,fontFamily:"-moz-initial"}}>Name</span><br />
          <input
            style={{ border: "none", background: "#f2f2f2", padding: 5, width: 300 }}
            type="text"
            name="name"
            value={billingDetails.name}
            readOnly
          /><br /><br />
          <span style={{ fontWeight: "800",fontFamily:"-moz-initial" }}>Street Address</span><br />
          <input
            style={{ border: "none", background: "#f2f2f2", padding: 5, width: 300 }}
            type="text"
            name="streetAddress"
            value={billingDetails.streetAddress}
            onChange={handleInputChange}
          />
          {errors.streetAddress && <p  style = {{color:'red',marginBottom:-20}} className="error">{errors.streetAddress}</p>}
          <br /><br />
          <span style={{ fontWeight: "800",fontFamily:"-moz-initial" }}>Apartment, floor etc..</span><br />
          <input
            style={{ border: "none", background: "#f2f2f2", padding: 5, width: 300 }}
            type="text"
            name="apartment"
            value={billingDetails.apartment}
            onChange={handleInputChange}
          />
          {errors.apartment && <p style = {{color:'red',marginBottom:-20}} className="error">{errors.apartment}</p>}
          <br /><br />
          <span style={{ fontWeight: "800",fontFamily:"-moz-initial" }}>City</span><br />
          <input
            style={{ border: "none", background: "#f2f2f2", padding: 5, width: 300 }}
            type="text"
            name="city"
            value={billingDetails.city}
            onChange={handleInputChange}
          />
          {errors.city && <p style = {{color:'red',marginBottom:-20}} className="error">{errors.city}</p>}
          <br /><br />
          <span style={{ fontWeight: "800",fontFamily:"-moz-initial" }}>Phone Number</span><br />
          <input
            style={{ border: "none", background: "#f2f2f2", padding: 5, width: 300 }}
            type="text"
            name="phone"
            value={billingDetails.phone}
            onChange={handleInputChange}
          />
          {errors.phone && <p style = {{color:'red',marginBottom:-20}} className="error">{errors.phone}</p>}
          <br /><br />
          <span style={{ fontWeight: "800",fontFamily:"-moz-initial" }}>Email Address</span><br />
          <input
            style={{ border: "none", background: "#f2f2f2", padding: 5, width: 300 }}
            type="email"
            name="email"
            value={billingDetails.email}
            readOnly
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
