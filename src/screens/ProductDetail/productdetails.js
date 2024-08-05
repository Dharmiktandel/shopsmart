import React, { useState } from "react";
import "./productdetails.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/action";
import { useNavigate } from "react-router";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const navv = useNavigate();

  const cartDesc = useSelector(state => state.addtocartt.addtocartItems);
  console.log('cartDesc', cartDesc);

  const [quantities, setQuantities] = useState(cartDesc.map(() => 1));

  const handleIncrement = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
  }

  const handleDecrement = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 0) {
      newQuantities[index]--;
      setQuantities(newQuantities);
    }
  }

  const getTotalPrice = (index) => {
    return cartDesc[index].price * quantities[index];
  }

  const getGrandTotalPrice = () => {
    let total = 0;
    for (let i = 0; i < cartDesc.length; i++) {
      total += cartDesc[i].price * quantities[i];
    }
    return total;
  }

  const handleRemove = (index) => {
    // Remove the item from the cart
    dispatch(removeFromCart(cartDesc[index].id));
    // Remove the item from quantities state
    const newQuantities = quantities.filter((_, i) => i !== index);
    setQuantities(newQuantities);
  }

  const gotobilling = () => {
    navv("/order");
  }

  return (
    <div className="product-detail-container">
      {cartDesc.length === 0 ? (
        <div className="empty-cart-message">
          <h3>Your Cart is Empty</h3>
          <p>Add items to your cart to proceed with checkout.</p>
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
                    <img src={item.thumbnail} alt={item.title} />
                  </div>
                  <div className="product-info">
                    <span>{item.description}</span><br />
                    <span>{item.title}</span><br />
                    <span>{item.price}</span><br />
                    <span>Total Price :</span><br />
                    <span>₹ {getTotalPrice(index)}</span><br />
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
    </div>
  );
}

export default ProductDetail;
