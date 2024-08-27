import React, { useState, useContext } from "react";
import "./Dashboard.css";
import searchh from "../../assets/searchIcon.png"
import userrr from "../../assets/userr.png";
import store from "../../assets/store.jpg";
import uu from "../../assets/userr.png";
import LabelInput from "../../components/Input/labelInput";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import uo from "../../assets/userr.png"
import { useDispatch, useSelector } from "react-redux";
import ImageUploading from 'react-images-uploading'
import { logout, removeProduct, setAddProduct } from "../../redux/action";
import { useNavigate } from "react-router";
import reward from '../../assets/shopp.jpg'




const Dashboard = () => {

    const vendorAccount = useSelector((state) => state.vendorsignuped.user);
    console.log('veeeeeeeeennnn', vendorAccount);

    const upcomingPlacedOrder = useSelector((state) => state.newPlacedOrdereddd.newPlacedOrder)
    console.log("upcomingPlacedOrderupcomingPlacedOrderupcomingPlacedOrder", upcomingPlacedOrder);


    


    const productss = useSelector((state) => state.vendorAddproducts.vendorItem);
    //const stayProduct = useSelector((state) => state.vendorsignuped.isAuthenticate)
    console.log("vendoraddproductsss", productss);
    const products = productss.filter(product => product.addedByEmail === vendorAccount.vendorEmail && product.addedByShopName === vendorAccount.shopname);


    const filteredOrders = upcomingPlacedOrder.filter(order => {
    // Assuming `addedByShopName` is found in `fetchCartDetails[0]` for example:
    const orderShopName = order.fetchCartDetails?.[0]?.addedByShopName?.toLowerCase();
    const vendorShopName = vendorAccount.shopname.toLowerCase();

    return orderShopName === vendorShopName;
});

console.log('Filtered Orders:', filteredOrders);

    
    const filteredProducts = productss.filter(product => {
        console.log(`Checking product: ${product.name}`);
        console.log(`Product email: ${product.addedByEmail}, Vendor email: ${vendorAccount.vendorEmail}`);
        console.log(`Product shop name: ${product.addedByShopName}, Vendor shop name: ${vendorAccount.shopname}`);
    
        return product.addedByEmail.toLowerCase() === vendorAccount.vendorEmail.toLowerCase() &&
               product.addedByShopName.toLowerCase() === vendorAccount.shopname.toLowerCase();
    });
    
    console.log('Filtered Products:', filteredProducts);

    upcomingPlacedOrder.forEach(order => {
        console.log(`Order email: ${order.getNameEmailData?.email}, Vendor email: ${vendorAccount.vendorEmail}`);
    });
    
    console.log('Filtered Orders:', filteredOrders);
    

    const [activeItem, setActiveItem] = useState("Dashboard");
    const [expandedRows, setExpandedRows] = useState({});

    const dispatch = useDispatch()
    const nav = useNavigate()






    const toggleRowExpansion = (rowIndex) => {
        setExpandedRows((prevState) => ({
            ...prevState,
            [rowIndex]: !prevState[rowIndex],
        }));
    };

    const [images, setImages] = useState([]);
    const maxNumber = 4; // Limit the number of images that can be uploaded

    // const onChange = (imageList, addUpdateIndex) => {
    //     // data for submit
    //     console.log(imageList, addUpdateIndex);
    //     setImages(imageList);
    // };


    const onChange = (imageList, addUpdateIndex) => {
        // Update images in the component state
        setImages(imageList);
        
        // Update the newProduct state with the images
        setNewProduct((prevProduct) => ({
            ...prevProduct,
            images: imageList, // Store the list of images
        }));
    };


    

    // State to manage the new product form inputs
    const [newProduct, setNewProduct] = useState({
        name: "",
        description: "",
        price: "",
        returnPolicy: "",
        image: null, // Add image field
        imagePreviewUrl: null, // Add image preview URL fie
        images:null
        //imageList: null
        //images: null
    });



    //handle inputchange
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewProduct((prevProduct) => ({
                    ...prevProduct,
                    image: file,
                    imagePreviewUrl: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        }
    };


    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };



   


    const handleLogout = () => {
        dispatch(logout())
        nav('/signin')
    }



    // Handle form submission to add a new product
    // const handleFormSubmit = (e) => {
    //     e.preventDefault();
    //     const productWithVendorEmail = {
    //         ...newProduct,
            
    //         addedByEmail: vendorAccount.
    //         vendorEmail, // Add vendor's email to the product
    //         addedByShopName: vendorAccount.shopname
    //     }
    //     dispatch(setAddProduct(productWithVendorEmail));
  
    //     //dispatch(setAddProduct(newProduct))
    //     // setProducts([...products,newProduct]);
    //     setNewProduct({
    //         name: "",
    //         description: "",
    //         price: "",
    //         returnPolicy: "",
    //         image: null,
    //         imagePreviewUrl: null,
    //         images: null
    //     });
    // };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const productWithVendorEmail = {
            ...newProduct,
            addedByEmail: vendorAccount.vendorEmail, // Add vendor's email to the product
            addedByShopName: vendorAccount.shopname,
        };
        
        // Dispatch the product including images to Redux
        dispatch(setAddProduct(productWithVendorEmail));
        console.log('productWithVendorEmail==>>',productWithVendorEmail);
        
        // Clear the form after submission
        setNewProduct({
            name: "",
            description: "",
            price: "",
            returnPolicy: "",
            image: null,
            imagePreviewUrl: null,
            images: [], // Reset images to an empty array
        });
        setImages([]); // Clear the images state as well
    };
    

    const handleRemove = (index) => {
        dispatch(removeProduct(index)); // Dispatch the remove action
    };

    




    // Sidebar items with detailed content design
    const sidebarItems = [
        {
            name: "Dashboard",
            content: (
                <div className="maindash">
                    <div className="pricediv">
                        <div
                            style={{
                                height: 100,
                                width: 200,
                                backgroundColor: "white",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 10
                            }}>
                            <b style={{ fontSize: 15, }}>2320</b>
                            <span>Total Sale Unit</span>
                        </div>

                        <div
                            style={{
                                height: 100,
                                width: 200,
                                backgroundColor: "white",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 10
                            }}>
                            <b style={{ fontSize: 15, }}>$8720</b>
                            <span>Total Earning</span>
                        </div>

                        <div
                            style={{
                                height: 100,
                                width: 200,
                                backgroundColor: "white",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 10
                            }}>
                            <b style={{ fontSize: 15, }}>$3260</b>
                            <span>Total Profit</span>
                        </div>

                        {/* <div
                            style={{
                                height: 100,
                                width: 200,
                                backgroundColor: "white",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 10
                            }}>
                            <b style={{ fontSize: 15, }}>$3260</b>
                            <span>This Year Profit</span>
                        </div> */}
                    </div>
                    <div className="sellingproduct">
                        <h2
                            style={{
                                marginLeft: 10,
                                fontWeight: 550

                            }}>
                            Top Selling Products
                        </h2>
                        <br />
                        <div>
                            <form>
                                <table style={{ marginLeft: 10, fontSize: 20 }}>
                                    <tr style={{ borderLeft: 'none', borderRight: "none", borderBottomWidth: 2, borderColor: '#DEE2E6', }}>
                                        <thead>
                                            <th style={{ width: 70, padding: "10px" }}>No.</th>
                                            <th style={{ width: 300, padding: "10px" }}>Product Name</th>
                                            <th style={{ width: 150, padding: "10px" }}>Sale</th>
                                            <th style={{ width: 120, padding: "10px" }}>Earning</th>
                                        </thead>
                                    </tr>
                                    <tr>
                                        <tbody style={{ borderLeft: 'none', borderRight: "none", borderBottomWidth: 2, borderColor: '#DEE2E6', }}>
                                            <td style={{ width: 70, padding: "10px" }}>1.</td>
                                            <td style={{ width: 300, padding: "10px" }}>Smart Watch</td>
                                            <td style={{ width: 150, padding: "10px" }}>320</td>
                                            <td style={{ width: 120, padding: "10px" }}>222</td>
                                        </tbody>
                                    </tr>
                                </table>
                            </form>
                        </div>
                        <div style={{}}>

                        </div>
                    </div>


                </div>
            ),
        },
        {
            name: "Account",
            content: (
                <div className="accountmaindiv">
                    <div style={{ display: "flex", flexDirection: "row", marginLeft: 5, alignItems: "center", textAlign: "center" }}>
                        {/* <span style={{ fontSize: 17,fontWeight:550 }}>Profile:</span> */}
                        {/* <img style={{ height: 75, width: 75 ,}} 
                          src={vendorAccount.image ? URL.createObjectURL(vendorAccount.image) : 'defaultImagePath.jpg'} 
                         alt="kk"></img>&nbsp;&nbsp;&nbsp; */}
                        <div>
                            <span style={{ fontWeight: 550, fontSize: 17 }}>
                                {`${vendorAccount.firstname} ${vendorAccount.lastname}`}
                            </span><br />
                            {/* <span style={{ color: "darkblue" }}>{vendorAccount.vendorEmail}</span> */}
                        </div>
                    </div>
                    <br /><br />
                    <form>
                        <div>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',

                                }}
                            >
                                <LabelInput
                                    label="First Name"
                                    vendorInfo={vendorAccount.firstname}
                                />
                                <LabelInput
                                    label="Last Name"
                                    vendorInfo={vendorAccount.lastname}
                                />

                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',

                                }}
                            >
                                <LabelInput
                                    label="Shop Name"
                                    vendorInfo={vendorAccount.shopname}
                                />
                                <LabelInput
                                    label="Contact Number"
                                    vendorInfo={vendorAccount.phone}
                                />

                            </div>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <LabelInput
                                    label="Shop Address"
                                    addressField={vendorAccount.shopaddress}
                                />
                                <div>
                                    <h4>My Email Address</h4>
                                    <span style={{ fontSize: 15, color: "darkblue" }} className="fa fa-envelope"> &nbsp;{vendorAccount.vendorEmail}</span></div>
                            </div>
                        </div>


                    </form>

                </div>
            ),
        },
        {
            name: "Products",
            content: (
                <div style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', width: '100%', marginTop: 40, }}>
                    <div style={{ width: '70%', maxHeight: '470px', overflowY: 'auto' }}>
                        <form>
                            <table style={{ fontSize: 20, width: "100%", border: 'none', backgroundColor: "white", borderRadius: 5, paddingBottom: 30, height: '50%' }}>
                                <thead style={{ position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 1 }}>
                                    <tr>
                                        <th style={{ width: '20%', padding: "10px", position: 'relative' }}>
                                            Product Name
                                            <span style={{
                                                content: '""',
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '2px',
                                                backgroundColor: '#DEE2E6'
                                            }}></span>
                                        </th>
                                        <th style={{ padding: "10px", width: "25%", position: 'relative' }}>
                                            Description
                                            <span style={{
                                                content: '""',
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '2px',
                                                backgroundColor: '#DEE2E6'
                                            }}></span>
                                        </th>
                                        <th style={{ padding: "10px", width: "15%", paddingLeft: '30px', position: 'relative' }}>
                                            Price
                                            <span style={{
                                                content: '""',
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '2px',
                                                backgroundColor: '#DEE2E6'
                                            }}></span>
                                        </th>
                                        <th style={{ padding: "10px", width: "20%", position: 'relative' }}>
                                            Return Policy
                                            <span style={{
                                                content: '""',
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '2px',
                                                backgroundColor: '#DEE2E6'
                                            }}></span>
                                        </th>
                                        <th style={{ padding: "10px", width: "5%", position: 'relative' }}>

                                            <span style={{
                                                content: '""',
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '2px',
                                                backgroundColor: '#DEE2E6'
                                            }}></span>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {products.map((product, index) => (
                                        <tr key={index} style={{ borderBottomWidth: 2, borderColor: '#DEE2E6' }}>
                                            <td style={{ padding: "10px" }}>
                                                <div>
                                                    {product.imagePreviewUrl && (
                                                        <img style={{ height: 25, width: 25 }} src={product.imagePreviewUrl} alt="product"></img>
                                                    )}
                                                    &nbsp;
                                                    <span>{product.name}</span>
                                                </div>
                                            </td>
                                            <td style={{ padding: "10px", fontSize: 15 }}>
                                                {expandedRows[index]
                                                    ? product.description
                                                    : `${product.description.substring(0, 50)}...`}
                                                <span
                                                    onClick={() => toggleRowExpansion(index)}
                                                    style={{ color: "blue", cursor: "pointer", marginLeft: 5 }}
                                                >
                                                    {expandedRows[index] ? "Show less" : "Show more"}
                                                </span>
                                            </td>
                                            <td style={{ padding: "10px", paddingLeft: '30px' }}>{product.price}</td>
                                            <td style={{ padding: "10px" }}>{product.returnPolicy}</td>
                                            <td><button onClick={() => handleRemove(index)} style={{ border: "none", fontSize: 15, width: 80, height: 30, backgroundColor: "#FF9F00" }}>Remove</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </form>
                    </div>

                    <div style={{ backgroundColor: "white", width: 320, justifyContent: 'center', display: 'flex', paddingTop: 20, paddingBottom: 20, flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ backgroundColor: "#f2f2f2", height: 200, width: '70%', display: "flex", alignItems: "center", justifyContent: "center", }}>

                            {newProduct.imagePreviewUrl ? (
                                <img src={newProduct.imagePreviewUrl} alt="Product Preview" style={{ height: '100%', width: "100%" }} />
                            ) : (
                                <span>No image selected</span>
                            )}
                        </div>
                        <input style={{ width: "70%", marginTop: 10 }} type="file" accept="image/*" onChange={handleImageChange} />
                        {/* =============================================================== */}
                        <div style={{
                            marginTop: 20,
                            height: 100,

                            width: '70%'
                        }}>
                            <ImageUploading
                                multiple
                                value={images}
                                onChange={onChange}
                                maxNumber={maxNumber}
                                dataURLKey="data_url"
                            >
                                {({
                                    imageList,
                                    onImageUpload,
                                    onImageRemoveAll,
                                    //onImageUpdate,
                                    //onImageRemove,
                                    isDragging,
                                    dragProps
                                }) => (
                                    // Write your building UI
                                    <div>

                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',

                                            backgroundColor: '#f2f2f2',
                                            height: 50,
                                            width: '100%'

                                        }}>
                                            {imageList.map((image, index) => (
                                                <div key={index} >
                                                    <img  src={image['data_url']} alt="" style={{ width: 50, height: 50, borderRadius: 5 }} />
                                                    <div className="image-item__btn-wrapper">
                                                        {/* <button onClick={() => onImageUpdate(index)}>Update</button>
                                                            <button onClick={() => onImageRemove(index)}>Remove</button> */}
                                                    </div>
                                                </div>
                                            ))}

                                        </div>
                                        <div style={{
                                            marginTop: 10,
                                            display: 'flex',
                                            flexDirection: "row",
                                            justifyContent: 'space-between'
                                        }}>
                                            <button className="btndraganddrop"
                                                style={{ color: isDragging ? 'red' : undefined, border: "none", height: 35, width: 100, borderRadius: 5, backgroundColor: '#FF9F00' }}

                                                onClick={onImageUpload}
                                                {...dragProps}
                                            >
                                                Click
                                            </button>
                                            &nbsp;
                                            <button
                                                style={{ border: "none", height: 35, width: 100, borderRadius: 5, backgroundColor: '#FF9F00' }}
                                                onClick={onImageRemoveAll}>Remove</button>
                                        </div>
                                    </div>
                                )}
                            </ImageUploading>
                        </div>
                        {/* Placeholder for product image or other content */}

                        <input style={{ width: "70%", marginTop: 10, paddingLeft: 5, height: 40 }} type="text" name="name" value={newProduct.name} onChange={handleInputChange} placeholder="Enter Product Name" />
                        <textarea style={{ width: "70%", marginTop: 10, paddingLeft: 5, height: 70 }} name="description" value={newProduct.description} onChange={handleInputChange} placeholder="Enter Description"></textarea>
                        <input style={{ width: "70%", marginTop: 10, paddingLeft: 5, height: 40 }} type="text" name="price" value={newProduct.price} onChange={handleInputChange} placeholder="Enter Price" />
                        <input style={{ width: "70%", marginTop: 10, paddingLeft: 5, height: 40 }} type="text" name="returnPolicy" value={newProduct.returnPolicy} onChange={handleInputChange} placeholder="Enter Return Policy" />
                        <button onClick={handleFormSubmit} style={{ backgroundColor: '#FF9F00', marginTop: 10, width: '70%', border: 'none', height: 30, borderRadius: 5 }}>
                            Add New Product
                        </button>
                    </div>
                </div>

            ),
        },
        {
            name: "Customer",
            content: (
                <div>
                    <form>
                        <table style={{
                            marginTop: 40, marginLeft: 50, fontSize: 20, width: "90%",
                            border: 'none', backgroundColor: "white", borderRadius: 5, paddingBottom: 30

                        }}>
                            <thead>
                                <tr style={{ borderLeft: 'none', borderRight: "none", borderBottomWidth: 2, borderColor: '#DEE2E6', }}>
                                    <th scope="col" style={{ padding: "10px", width: "10%", }}>OrderId</th>
                                    <th scope="col" style={{
                                         width: '30%', 
                                        padding: "10px", 
                                    }}>Product Name</th>
                                    <th scope="col" style={{
                                          width: '15%',
                                          padding: "10px" }}>Price</th>
                                    <th style={{ padding: "10px", 
                                     width: '20%'
                                     }} scope="col">Customer Name</th>
                                    <th scope="col" style={{ padding: "10px", textAlign: "right", }}>Contact Number</th>
                                </tr>
                            </thead>
                            <tbody>
                            {/* {filteredOrders.map((item, index) => {
                            
                            const { name: customerName, phone } =
                                item.billingDetails || {};
                                const {  imagePreviewUrl, name, totalPrice } =
                                item.fetchCartDetails[index] || {};

                            return (
                                <tr
                                    key={item.orderId || index}
                                    style={{
                                        borderLeft: "none",
                                        borderRight: "none",
                                        borderBottomWidth: 2,
                                        borderColor: "#DEE2E6",
                                    }}
                                >
                                    <td style={{ padding: "10px" }}>{index + 1}</td>
                                    <td style={{ padding: "10px" }}>
                                        <div>
                                            {imagePreviewUrl && (
                                                <>
                                                    <img
                                                        style={{ height: 25, width: 25 }}
                                                        src={
                                                            typeof imagePreviewUrl === "string"
                                                                ? imagePreviewUrl
                                                                : URL.createObjectURL(imagePreviewUrl)
                                                        }
                                                        alt="Product"
                                                    />
                                                    &nbsp;
                                                    <span>{name}</span>
                                                </>
                                            )}
                                        </div>
                                    </td>
                                    <td style={{ padding: "10px" }}>{totalPrice}</td>
                                    <td style={{ padding: "10px" }}>{customerName}</td>
                                    <td style={{ padding: "10px", textAlign: "right" }}>
                                        {phone}
                                    </td>
                                </tr>
                            );
                        })} */}
                        {filteredOrders.map((item, index) => {
    const { name: customerName, phone } = item.billingDetails || {};
    const fetchDetails = item.fetchCartDetails?.[0] || {}; // Safely access the first item in fetchCartDetails
    const { imagePreviewUrl, name, totalPrice } = fetchDetails;

    return (
        <tr
            key={item.orderId || index}
            style={{
                borderLeft: "none",
                borderRight: "none",
                borderBottomWidth: 2,
                borderColor: "#DEE2E6",
            }}
        >
            <td style={{ padding: "10px" }}>{index + 1}</td>
            <td style={{ padding: "10px" }}>
                <div>
                    {imagePreviewUrl && (
                        <>
                            <img
                                style={{ height: 25, width: 25 }}
                                src={
                                    typeof imagePreviewUrl === "string"
                                        ? imagePreviewUrl
                                        : URL.createObjectURL(imagePreviewUrl)
                                }
                                alt="Product"
                            />
                            &nbsp;
                            <span>{name}</span>
                        </>
                    )}
                </div>
            </td>
            <td style={{ padding: "10px" }}>{totalPrice}</td>
            <td style={{ padding: "10px" }}>{customerName}</td>
            <td style={{ padding: "10px", textAlign: "right" }}>
                {phone}
            </td>
        </tr>
    );
})}

                            </tbody>
                        </table>
                    </form>
                </div>
            ),
        },
        {
            name: "Calendar",
            content: (
                <div>
                    <h2>About Us</h2>
                    <p>Learn more about our mission and values.</p>
                    <blockquote>
                        "Our mission is to create something amazing."
                    </blockquote>
                </div>
            ),
        },
        {
            name: "Setting",
            content: (
                <div>
                    <h1>gsbsh</h1>
                </div>
            ),
        },
        {
            name: "Help",
            content: (
                <div>
                    <h2>About Us</h2>
                    <p>Learn more about our mission and values.</p>
                    <blockquote>
                        "Our mission is to create something amazing."
                    </blockquote>
                </div>
            ),
        },
    ];

    return (
        <div style={{ display: "flex", height: "100vh", flexDirection: 'column' }}>
            {/* Sidebar */}
            <div style={{
                backgroundColor: 'white',
                 width: '100%',
                height: '15%',
                // display: 'flex',
                // flexDirection: 'row',
                //justifyContent: 'space-between',
                display:"grid",
                gridTemplateColumns:"repeat(3, 1fr)",
                alignItems: "center"
            }}>
                <div style={{ display: "flex", flexDirection: "row", marginLeft: 20 }}>
                    <img style={{ height: 40, width: 40, borderRadius:5 }} src={vendorAccount.productimage ? URL.createObjectURL(vendorAccount.productimage) : 'defaultImagePath.jpg'} alt="store"></img>&nbsp;&nbsp;
                    <h3 style={{ fontWeight: 550 }}>{vendorAccount.shopname}</h3>
                </div>
                <div style={{display:"flex",flexDirection:"row",width:"80%",borderRadius:8,padding:10,height:35,alignItems:"center",position:"relative",gap:10,border:"1px solid",}}>
                    <input style={{ width: "90%", height: 25, paddingLeft: 10,border:"none" ,padding:10,fontSize:16,outline:"none"}} placeholder="Search"></input>
                    <button style={{height:35,background:"none",border:"none",alignItems:"center"}}>
                    <img style={{height:25,width:25}} src={searchh} alt="searcgh"></img>
                    </button>
                </div>
                <div style={{ marginLeft:230, fontSize: 15, fontWeight: 550 }}>

                    <span>{vendorAccount.firstname}</span>&nbsp;
                    <span>{vendorAccount.lastname}</span>&nbsp;&nbsp;
                    <button onClick={handleLogout} style={{ border: "none", backgroundColor: '#FF9F00', height: 30, width: 80,borderRadius:5 }}>Logout</button>
                </div>
            </div>

            <div style={{
                width: '100%',
                //  backgroundColor: 'gray',
                backgroundColor: "#f2f2f2",
                height: '75%',
                display: 'flex',
                flexDirection: 'row',

            }}>
                <div style={{
                    width: "250px",
                    // background: "#2c3e50",
                    background: "white",
                    // color: "#fff",
                    color: "black",
                    display: "flex",
                    flexDirection: "column",
                    padding: "20px",
                    // marginTop: 80
                }}>

                    <h3>Sidebar</h3>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        {sidebarItems.map((item) => (
                            <li
                                key={item.name}
                                style={{
                                    padding: "10px 0",
                                    cursor: "pointer",
                                    backgroundColor: activeItem === item.name ? "#f2f2f2" : "transparent",
                                }}
                                onClick={() => setActiveItem(item.name)}//#34495e
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>


                <div style={{ padding: "20px", width: '100%' }}>

                    {sidebarItems.map((item) =>
                        item.name === activeItem && (
                            <div style={{
                                height: '50%',
                            }} key={item.name}>
                                {item.content}
                            </div>
                        )
                    )}
                </div>

            </div>


        </div>
    );
};

export default Dashboard;

