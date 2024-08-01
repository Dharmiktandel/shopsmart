import React from "react";
import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation
//import searchh from "../../assets/searchIcon.png";
import "./categories.css";

const Cat = () => {
    const location = useLocation();
    const redirect = useNavigate();
    const { categoryData, categoryName } = location.state || {}; // Get data from state

    if (!categoryData) {
        return <p>No category data available.</p>;
    }


    const productdtl = (item)=> {
        redirect("/addtocart", { state: { item } })
     }

    return (
        <>
            <div style={{ paddingTop: 20 }}>
                <h2>Products in {categoryName}</h2>
                <div className="maincat">
                    {categoryData.length > 0 ? (
                        categoryData.map((product) => (
                            <button key={product.id} onClick={()=> productdtl(product)} className="btncat">
                                <img style={{ width: '100%' }} src={product.thumbnail} alt={product.title} />
                                <span style={{ fontWeight: '700', fontSize: 20 }}>{product.title}</span>
                                <span style={{ fontWeight: '400', fontSize: 15, textAlign: 'left' }}>{product.description}</span>
                                <span style={{ color: "red", fontWeight: 1000 }}>${product.price}</span>
                            </button>
                        ))
                    ) : (
                        <p>No products available.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Cat;
