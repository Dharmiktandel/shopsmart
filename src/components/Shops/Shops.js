// import React from "react";
// import "./Shop.css";
// import { useSelector } from "react-redux";

// const Shop = () => {
//     const VendorShop = useSelector((state) => state.vendorsignuped.users);
//     console.log("vendorrrr",VendorShop);

//     return (
//         <div style={{ display: 'grid',
//             gridTemplateColumns:'repeat(3,1fr)',
        
          
            
//         }}>
        
//             {Array.isArray(VendorShop) && VendorShop.length > 0 ? (
                
//                 VendorShop.map((item, index) => (
                    
//                     <div key={index}>
//                     <button className="shopbtn">
//                         <img
//                             style={{
//                                 height: 230,
//                                 width: 300,
//                                 alignSelf: 'center',
//                                 borderRadius: 10
//                             }}
//                             src={typeof item.productimage === 'string' ? item.productimage : (item.productimage ? URL.createObjectURL(item.productimage) : 'defaultImagePath.jpg')}
//                             alt="Product"
//                         />
//                         <h1 style={{ fontSize: 20, marginLeft: 12, marginTop: 10 }}>{item.shopname}</h1>
//                         <h1 style={{ color: "gray", fontSize: 15, marginLeft: 12 }}>{item.category}</h1>
//                     </button>
//                     </div>
//                 ))
//             ) : (
//                 <p style={{marginLeft:100}}>No items available</p>
//             )}
//         </div>
//     );
// };

// export default Shop;
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Shop.css";

const Shop = () => {
    const navigate = useNavigate();
    const VendorShop = useSelector((state) => state.vendorsignuped.users);
    
   const handleShopClick = (shopname,productimage,category) => {
    const encodedShopName = encodeURIComponent(shopname);
    navigate(`/vendor/${encodedShopName}`,{state:{productimage,category}});
  };


    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
            {Array.isArray(VendorShop) && VendorShop.length > 0 ? (
                VendorShop.map((item) => (
                    <div key={item.shopname}>
                        <button className="shopbtn" onClick={() => handleShopClick(item.shopname,item.productimage,item.category)}>
                            <img
                                style={{ height: 230, width: 300, alignSelf: 'center', borderRadius: 10 }}
                                src={typeof item.productimage === 'string' ? item.productimage : (item.productimage ? URL.createObjectURL(item.productimage) : 'defaultImagePath.jpg')}
                                alt="Product"
                            />
                            <h1 style={{ fontSize: 20, marginLeft: 12, marginTop: 10 }}>{item.shopname}</h1>
                            <h1 style={{ color: "gray", fontSize: 15, marginLeft: 12 }}>{item.category}</h1>
                        </button>
                    </div>
                ))
            ) : (
                <p style={{ marginLeft: 100 }}>No items available</p>
            )}
        </div>
    );
};

export default Shop;
