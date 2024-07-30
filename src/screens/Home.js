import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Product/Product";
import banner from '../assets/banner-2.png';
import "./Home.css";
import CategoryName from "../components/Category/categoryName";
import axios from 'axios';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [categoryData, setCategoryData] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Use navigate

    const handleCategorySelect = async (categorySlug) => {
        setSelectedCategory(categorySlug);
        setLoading(true);
        try {
            const response = await axios.get(`https://dummyjson.com/products/category/${categorySlug}`);
            console.log('API Response:', response.data); // Log the response
            setCategoryData(response.data.products);
            // Navigate to Cat page with category data
            navigate('/cat', { state: { categoryData: response.data.products, categoryName: categorySlug } });
        } catch (error) {
            console.error('Error fetching category data', error);
        } finally {
            setLoading(false);
        }
    };

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
                            <CategoryName onCategorySelect={handleCategorySelect} />
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
            <div></div>
        </>
    );
};

export default Home;
