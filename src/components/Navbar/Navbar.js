import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Navbar.css";
import logo from '../../assets/shopp.jpg';
import search from "../../assets/searchIcon.png";
import { logout } from "../../redux/action";
import axios from "axios";

const Navbar = () => {
    const dispatch = useDispatch();
    const isAuthenticate = useSelector((state) => state.signuped.isAuthenticate);
    
    const [showModal, setShowModal] = useState(false);
    const [searchProduct, setSearchProduct] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navig = useNavigate();

    const fetchSearchProducts = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products?search=${searchQuery}`);
            const filteredData = response.data.products.filter(product =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchProduct(filteredData);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        if (searchQuery.length > 0) {
            fetchSearchProducts();
            setShowModal(true);
        } else {
            setSearchProduct([]);
            setShowModal(false);
        }
    }, [searchQuery]);

    const handleLogout = () => {
        dispatch(logout());
        navig("/signin"); // Redirect to the signin page after logout
    };

    return (
        <div className="header">
            <div className="logo">
                <Link to="/#">
                    <img style={{ width: 170, height: 100, marginTop: -25 }} src={logo} alt="Logo" />
                </Link>
            </div>

            <div className="search">
                <input 
                    type="text" 
                    placeholder="Search Here" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="btnSearch">
                    <img style={{ height: 25, width: 25 }} src={search} alt="search" />
                </button>
                {showModal && (
                    <div className="modalsss">
                        {searchProduct.length > 0 ? (
                            searchProduct.map((item, index) => (
                                <div key={index}>
                                    <h1>{item.title}</h1>
                                </div>
                            ))
                        ) : (
                            <p>No products found</p>
                        )}
                       
                    </div>
                )}
            </div>

            <div className="icons">
                <button onClick={() => navig("/account")} className="fa fa-user-circle"> 
                    &nbsp;&nbsp;Account   
                </button>  
                {isAuthenticate ? (
                    <>
                        <button onClick={handleLogout} className="fa fa-sign-out">
                            &nbsp;&nbsp;Logout
                        </button>
                        <button onClick={() => navig('/productDetail')} className="fa fa-shopping-cart">
                            &nbsp;&nbsp;Cart
                        </button>
                    </>
                ) : (
                    <>
                        <button onClick={() => navig('/signin')} className="fa fa-sign-in">
                            &nbsp;&nbsp;Login
                        </button>
                        <button onClick={() => navig('/productDetail')} className="fa fa-shopping-cart">
                            &nbsp;&nbsp;Cart
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
