import React, { useEffect, useState } from "react";
import "./CategoryName.css";
import axios from 'axios';

const CategoryName = () => {
    const [categoryList, setCategoryList] = useState([]);

    const fetchCategories = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products/categories');
            setCategoryList(response.data); // Ensure response.data is an array of strings
            console.log('categoryData', response.data);
        } catch (error) {
            console.error('Error fetching categories', error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div className="category-container">
            {categoryList.length > 0 ? (
                categoryList.map((item, index) => (
                    <button key={index} style={{ border: 'none', background: "none", width: '100%', padding: '10px' }}>
                        <span>{item.name}</span>
                    </button>
                ))
            ) : (
                <p>No categories available.</p>
            )}
        </div>
    );
};

export default CategoryName;
