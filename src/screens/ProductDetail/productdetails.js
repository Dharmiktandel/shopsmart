import React, { useState } from "react";
import emptycartt from "../../assets/emptycart.png";
import "./productdetails.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, setTotalPrice } from "../../redux/action";
import { useNavigate } from "react-router";

const ProductDetail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector(state => state.addtocartt.cartItems);
    const loggedInUser = useSelector(state => state.signuped.user);
    const userEmail = loggedInUser?.email;

    // Fallback to empty array if cartItems[userEmail] is not defined or not an array
    const cartDesc = Array.isArray(cartItems[userEmail]) ? cartItems[userEmail] : [];
    const [quantities, setQuantities] = useState([]);

    const handleRemove = (index) => {
        dispatch(removeFromCart(cartDesc[index].id, userEmail));
        const newQuantities = quantities.filter((_, i) => i !== index);
        setQuantities(newQuantities);
    };

    const handleAdd = (index) => {
        const newQuantities = [...quantities];
        newQuantities[index] = (newQuantities[index] || 1) + 1;
        setQuantities(newQuantities);
    };

    return (
        <div>
            <br />
            <div>
                {cartDesc.length === 0 ? (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img style={{ height: 200, width: 200 }} src={emptycartt} alt="empty cart" />
                        <span style={{ fontSize: 25, color: "grey" }}>Cart Empty</span>
                    </div>
                ) : (
                    cartDesc.map((item, index) => (
                        <div className="product-detail-card" key={index}>
                            <img src={item.thumbnail} alt={item.title} className="product-image" />
                            <div className="product-info">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <p>{item.price}</p>
                                <button onClick={() => handleRemove(index)}>Remove</button>
                                <button onClick={() => handleAdd(index)}>Add</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ProductDetail;
