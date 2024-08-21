// import React from "react";
// import bannerrr from "../../assets/banner-2.png"
// import magoo from "../../assets/mango.jpg"
// import { useLocation } from "react-router";

// const VendorShopp = () => {
//     const location = useLocation()
//     const{productimage,category} = location.state  || {}
//     return(
//         <>
//            <div>
//            <div style={{display:"flex",flexDirection:"column",marginLeft:200,marginTop:50}}>
//             <img style={{height:400,width:"80%",}} src={typeof productimage === 'string' ? productimage : (productimage ? URL.createObjectURL(productimage) : 'defaultImagePath.jpg')} alt="imggg"></img>
//             <span style={{fontSize:30,fontWeight:550}}>{category}</span>
//             <span style={{fontSize:20}}>shop address</span>
//            </div>
//            <hr style={{width:"70%",marginLeft:190}}></hr>
//            <div style={{display:"flex",flexDirection:"row"}}>
//            <div style={{marginLeft:200}}>
//             <h2>Order Online</h2>
//             <div style={{
//                 backgroundColor:'red',display:'flex',flexDirection:'row',
//                 width:350,
//                 justifyContent:'space-between'
//             }}>
//             <button style={{height:200,width:200, borderRadius:10}}>
//                 <img style={{height:200,width:200, borderRadius:10}} src={magoo} alt="kk"></img>
//             </button>
//             <div>
//             <h5 style={{fontSize:30}}>Mango</h5>
//             <h5>220</h5>
//             </div>
//             </div>
//            </div>
//            <input style={{height:35,width:"20%",marginLeft:350,paddingLeft:5,borderRadius:5}} type="text" placeholder="search here"></input>
//            </div>
//            </div>
//         </>
//     )
// }
// export default VendorShopp;


import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import bannerrr from "../../assets/banner-2.png"

const VendorShop = () => {
    const { shopname } = useParams();
    console.log('shoppppppppppp',shopname);
    const decodedShopName = decodeURIComponent(shopname).trim().toLowerCase(); // Normalize shopname
    console.log('Decoded Shop Name:', decodedShopName);
    const location = useLocation()
    const {productimage, category} = location.state || {}
    console.log('productimage',productimage);
    
    
    const products = useSelector((state) => state.vendorAddproducts.vendorItem);
    console.log('Products:', products);
    
    const [shopProducts, setShopProducts] = useState([]);

    useEffect(() => {
        console.log('Filtering products for:', decodedShopName);
        
        const filteredProducts = products.filter(product => {
            const shopName = product.addedByShopName?.trim().toLowerCase() || '';
            const addedByEmail = product.addedByEmail?.trim().toLowerCase() || '';
    
            console.log(`Comparing decodedShopName: "${decodedShopName}" with shopName: "${shopName}" and addedByEmail: "${addedByEmail}"`);
    
            // Filter products based on matching shopName or addedByEmail
            return shopName === decodedShopName || addedByEmail === decodedShopName;
        });
    
        setShopProducts(filteredProducts);
        console.log('Filtered products:', filteredProducts);
    }, [decodedShopName, products]);
    

    return (
        <div>
        <div style={{display:"flex",flexDirection:"column",marginLeft:200,marginTop:50}}>
            <img style={{height:400,width:"80%",}}src={productimage === 'string' ? productimage : (productimage ? URL.createObjectURL(productimage) : 'defaultImagePath.jpg')} alt="imggg"></img>
             <span style={{fontSize:30,fontWeight:550}}>{shopname}</span>
             <span style={{fontSize:20}}>{category}</span>
            </div>
            <hr style={{width:"70%",marginLeft:190}}></hr>
            <h2>Products from Shop {shopname} owner</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                {shopProducts.length > 0 ? (
                    shopProducts.map((product) => (
                        <div key={product.id} className="product-card">
                            <img
                                style={{ height: 150, width: 200, borderRadius: 10 }}
                                src={product.imagePreviewUrl || 'defaultProductImage.jpg'}
                                alt={product.name}
                            />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                        </div>
                    ))
                ) : (
                    <p>No products available for this shop.</p>
                )}
            </div>
        </div>
    );
};

export default VendorShop;

