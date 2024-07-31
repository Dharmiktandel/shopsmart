import React from "react";
import "./addtocart.css";
import Navbar from "../../components/Navbar/Navbar";
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/action";

const Addtocart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const { item } = location.state;

    // Access authentication state from Redux store
    const isAuthenticated = useSelector(state => state.signuped.isAuthenticate);
    console.log('isssssssssssssssssssss',isAuthenticated);

    const handleAddToCart = () => {
        if (isAuthenticated) {
            dispatch(addToCart(item));
            navigate('/productDetail');
        } else {
            navigate('/signin');
        }
    };

    return (
        <>
            <Navbar />

            <div className="addtocartmaincontainer">
                <div className="addtocartsubcontainer">
                    <div className="small-img">
                        {item.images.map((productImage, index) => (
                            <img
                                key={index}
                                style={{ height: 70, width: 70, backgroundColor: "white", marginTop: 10 }}
                                src={productImage}
                                alt={`product-${index}`}
                            />
                        ))}
                    </div>
                    <div className="main-img">
                        <img
                            style={{ height: 230, width: 230, backgroundColor: "white" }}
                            src={item.thumbnail}
                            alt="main-thumbnail"
                        />
                    </div>
                    <div style={{ paddingTop: 20 }}>
                        <span style={{ color: "#000", fontSize: 18, fontWeight: '500' }}>
                            {item.title}
                        </span>
                        <br />
                        <span style={{ color: "grey", fontSize: 15 }}>
                            STORE: INFINITY WORKS
                        </span>
                        <br />
                        <span style={{ color: "orange", fontWeight: '700', fontSize: 15 }}>
                            {item.price}
                        </span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span style={{ color: "#063970", fontSize: 15, fontWeight: '600' }}>
                            Save up to {item.discountPercentage}%
                        </span>
                        <br />
                        <span style={{ color: "red", fontSize: 15, textDecoration: "underline", textDecorationColor: "red" }}>
                            Get Coupon
                        </span>
                        <br />
                        <span style={{ color: "black", fontSize: 15 }}>
                            Price:
                        </span>
                        &nbsp;
                        <span style={{ color: "#000", fontSize: 14, fontWeight: '500' }}>
                            {item.price}
                        </span>
                        &nbsp;
                        <span style={{ color: "#000", fontSize: 12, fontWeight: '600' }}>
                            (Exclusive of all taxes)
                        </span>
                        <br />
                        <span style={{ color: "#000", fontSize: 15, fontWeight: '600' }}>
                            {item.price}
                        </span>
                        <span style={{ color: "grey", fontSize: 14, fontWeight: '500' }}>
                            /Piece
                        </span>
                        &nbsp;
                        <span style={{ color: "#000", fontSize: 12, fontWeight: '600' }}>
                            (Inclusive of all taxes)
                        </span>
                        <br /><br />
                        <button onClick={handleAddToCart} className="btn-addtocart">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Addtocart;
