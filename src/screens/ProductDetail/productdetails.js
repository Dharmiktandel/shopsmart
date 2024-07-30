import React, { useState } from "react";
import "./productdetails.css";
import { useSelector } from "react-redux";

const ProductDetail = () => {

  const cartDesc = useSelector(state => state.addtocartt.addtocartItems);
  console.log('cartDesc', cartDesc);
  const [quantities, setQuantities] = useState(cartDesc.map(() => 0));

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

  return (
    <div className="product-detail-container">
      <div className="shopping-cart">
        <h3>SHOPPING CART</h3>
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
                <button className="remove-button">REMOVE</button><br />
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
      <div className="payment-summary">
        <span>Total Payment:</span><br />
        <span>₹ {getGrandTotalPrice()}</span>
        <button className="proceed-button">Proceed to Buy</button>
      </div>
    </div>
  );
}

export default ProductDetail;
