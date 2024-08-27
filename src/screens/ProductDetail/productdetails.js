import React, { useState } from "react";
import emptycartt from "../../assets/emptycart.png";
import "./productdetails.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, setTotalPrice } from "../../redux/action";
import { useNavigate } from "react-router";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const emails = useSelector(state => state.signuped.user.email);
  // console.log('emailsssssssss',emails);
  
  // const cartDesc = useSelector(state => state.addtocartt.addtocartItems[emails] || []);
 
  // console.log('cartDesccartDesc',cartDesc);
  
  // const isAuthenticate = useSelector(state => state.signuped.isAuthenticate);


  const emails = useSelector(state => state.signuped.user?.email);
  console.log('emailsssssssss',emails);
const cartDesc = useSelector(state => emails ? (state.addtocartt.addtocartItems[emails] || []) : []);
console.log('cartDesccartDesc',cartDesc);
const isAuthenticate = useSelector(state => state.signuped.isAuthenticate);

// Rest of your code...

  

  const [quantities, setQuantities] = useState(cartDesc.map(() => 1));

  const handleIncrement = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
  };

  const handleDecrement = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 0) {
      newQuantities[index]--;
      setQuantities(newQuantities);
    }
  };

  const getTotalPrice = (index) => {
    return cartDesc[index].price * quantities[index];
  };

  const getGrandTotalPrice = () => {
    return cartDesc.reduce((total, item, index) => total + getTotalPrice(index), 0);
  };

//   const handleRemove = (index) => {
//     // Log the index and item ID for debugging
//     console.log("Removing item at index:", index);
//     console.log("Item ID:", cartDesc[index].id);
    
//     // Dispatch the removeFromCart action
//     dispatch(removeFromCart( emails, cartDesc[index].id));
    
//     // Update quantities state
//     const newQuantities = quantities.filter((_, i) => i !== index);
//     console.log("Updated Quantities:", newQuantities);
//     setQuantities(newQuantities);
// };



const [cartDescr, setCartDescr] = useState([]);

const handleRemove = (index) => {
  console.log("Removing item at index:", index);
  
  // Dispatch the removeFromCart action with the index
  dispatch(removeFromCart(emails, index));
  
  // Update quantities state
  const newQuantities = quantities.filter((_, i) => i !== index);
  setQuantities(newQuantities);

  // Optionally update the cart state locally
  const updatedCart = cartDesc.filter((_, i) => i !== index);
  setCartDescr(updatedCart);
};


  const gotobilling = () => {
    const detailedItems = cartDesc.map((item, index) => ({
      ...item,
      quantity: quantities[index],
      totalPrice: getTotalPrice(index),
    }));

    dispatch(setTotalPrice(getGrandTotalPrice()));
    dispatch({ type: 'SET_CART_DETAILS', payload: detailedItems });
    console.log('setcartdetaillllll',detailedItems);
    navigate("/order", { state: { items: detailedItems } });
  };

  const handleLoginRedirect = () => {
    navigate("/signin");
  };

  return (
    <div className="product-detail-container">
      {!isAuthenticate ? (
        <div style={{ marginTop: 200, textAlign: "center", width: "100%" }}>
          <h1 style={{ fontWeight: 800 }}>Please log in to view your cart.</h1>
          <button onClick={handleLoginRedirect} style={{ height: 50, width: 150, color: "white", backgroundColor: "#063970", marginTop: 20 }}>Login</button>
        </div>
      ) : (
        <>
          {cartDesc.length === 0 ? (
            <div className="empty-cart-message">
              <h2>SHOPPING CART</h2>
              <img style={{ marginLeft: 190 }} src={emptycartt} alt="Empty cart" />
              <h1 style={{ fontWeight: 800 }}>Your Cart Is Currently Empty!</h1>
              <p style={{ color: "grey" }}>Before proceed to checkout you must add some products to your shopping cart.<br />You will find lot of interesting products on our "shop" page.</p>
            </div>
          ) : (
            <>
              <div className="shopping-cart">
                <h3 style={{ marginLeft: 30 }}>SHOPPING CART</h3>
                <hr />
                <div className="product-scroll">
                  {cartDesc.map((item, index) => (
                    <div key={index} className="product-item">
                      <div className="product-img">
                        <img 
                          src={typeof item.imagePreviewUrl === 'string' ? item.imagePreviewUrl : (item.imagePreviewUrl ? URL.createObjectURL(item.imagePreviewUrl) : item.thumbnail)} 
                          alt={item.title} 
                        />
                      </div>
                      <div className="product-info">
                        <span style={{fontSize:20,fontStyle:"initial"}}>{item.title ? item.title : item.name}</span><br />
                        <span className="desprtotalign">{item.description}</span><br />
                         <span className="desprtotalign">₹ {item.price}</span><br />
                        <span className="desprtotalign">Total Price :₹{getTotalPrice(index)}</span><br />
                        
                        <button onClick={() => handleDecrement(index)} className="quantity-button">-</button>
                        <span className="quantity-display">{quantities[index]}</span>
                        <button onClick={() => handleIncrement(index)} className="quantity-button">+</button><br />
                        <button onClick={() => handleRemove(index)} className="remove-button">REMOVE</button><br />
                      </div>
                      <hr />
                    </div>
                  ))}
                </div>
              </div>
              <div className="payment-summary">
                <span>Total Payment:</span><br />
                <span>₹ {getGrandTotalPrice().toFixed(3)}</span>
                <button onClick={gotobilling} className="proceed-button">Proceed to Buy</button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ProductDetail;
