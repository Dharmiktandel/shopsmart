import React from "react";
import "./addtocart.css"
import Navbar from "../../components/Navbar/Navbar";
import searchh from "../../assets/searchIcon.png";
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/action";

const Addtocart = () => {
    const nav = useNavigate();
    
    const dispatch = useDispatch();
    const location = useLocation()
    const { item } = location.state

    // const handleaddtocart =()=> {
    //     nav("/productDetail");
        
    // }


      const passData = (item) => {
      dispatch(addToCart(item))
      nav('/productDetail')
}

    return (
        <>
            <div>
                <Navbar />
            </div>

            <div className="addtocartmainconatiner">
                <div className="addtocartsubconatiner">
                    <div className="smaallimg">
                        {
                    item.images.map((productImage, index)=> (
                        <div key={index}>
                        <img style={{height:70,width:70,backgroundColor:"white",marginTop:10}} src={productImage} alt="kk"></img>
                        </div>
                    ))
                }
                        

                    </div>
                    <div className="mainimg">
                        <img style={{height:230,width:230,backgroundColor:"white",}} src={item.thumbnail} alt="kk"></img>
                    </div>
                    <div style={{ paddingTop: 20,  }}>
                        <span style={{ color: "#000", fontSize: 18, fontWeight: '500', }}>{item.title} <br></br></span><br></br>
                        <span style={{ color: "grey", fontSize: 15 }}>STORE : INFINITY WORKS</span><br></br>
                        <span style={{ color: "orange", fontWeight: '700', fontSize: 15 }}>{item.price}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span style={{ color: "#063970", fontSize: 15, fontWeight: '600' }}>Save upto {item.discountPercentage}%</span><br></br>
                        <span style={{ color: "red", fontSize: 15, textDecorationLine: "underline", textDecorationColor: "red" }}>Get Coupon</span><br></br>
                        <span style={{ color: "black", fontSize: 15 }}>Price:</span>&nbsp;
                        <span style={{ color: "#000", fontSize: 14, fontWeight: '500' }}>{item.price}</span>&nbsp;
                        <span style={{ color: "#000", fontSize: 12, fontWeight: '600' }}>(Exclusive of all taxes)</span><br></br>
                        <span style={{ color: "#000", fontSize: 15, fontWeight: '600' }}>{item.price}</span>
                        <span style={{ color: "grey", fontSize: 14, fontWeight: '500' }}>/Piece</span>&nbsp;
                        <span style={{ color: "#000", fontSize: 12, fontWeight: '600' }}>(Inclusive of all taxes)</span><br></br><br></br>
                        <button onClick={()=>passData(item)} className="btnaddtocart">Add to cart</button>
                    </div>



                </div>
            </div>
        </>
    )
}
export default Addtocart; 