import React from "react";
import Navbar from "../components/Navbar/Navbar";

import Products from "../components/Product/Product";
import banner from '../assets/banner-2.png';
import "./Home.css";

import CategoryName from "../components/Category/categoryName";

const Home = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="mainContainer">
                <div className="subContainer">
                    <div className="categories">
                        <h5>Categories</h5>
                        <div className="listScroll">
                           <CategoryName/>
                        </div>
                    </div>
                    <img style={{ height: 400 }} src={banner} alt="banner" />
                </div>
            </div>
            <div>
                <h3 style={{ marginLeft: 20 }}>All Products</h3>
                <div className="callproducts">
                    <Products />
                    
                </div>
            </div>
            <br />
            <hr />
            <div>
                
                </div>
        </>
    );
};

export default Home;
