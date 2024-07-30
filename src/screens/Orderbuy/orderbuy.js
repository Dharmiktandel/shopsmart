import React from "react";
import "./orderbuy.css"
import Navbar from "../../components/Navbar/Navbar";
import logoo from "../../assets/userr.png"

const Orderbuy = () => {
    return(
        <>
            <div>
                <Navbar/>
            </div>

            <div className="billconatiner">
            <div className="billdtl">
            <h3 style={{fontWeight:1000}}>Billing Details</h3><br/>
            <span style={{fontWeight:"800"}}>Name</span><br></br>
            <input style={{border:"none",background:"#f2f2f2",padding:5,width:300}} type="text"></input><br></br><br></br>
            <span style={{fontWeight:"800"}}>Company Name</span><br/>
            <input style={{border:"none",background:"#f2f2f2",padding:5,width:300}} type="text"></input><br/><br/>
            <span style={{fontWeight:"800"}}>Street Address</span><br/>
            <input style={{border:"none",background:"#f2f2f2",padding:5,width:300}} type="text"></input><br/><br/>
            <span style={{fontWeight:"800"}}>Apartment,floor etc..</span><br/>
            <input style={{border:"none",background:"#f2f2f2",padding:5,width:300}} type="text"></input><br/><br/>
            <span style={{fontWeight:"800"}}>City</span><br/>
            <input style={{border:"none",background:"#f2f2f2",padding:5,width:300}} type="text"></input><br/><br/>
            <span style={{fontWeight:"800"}}>Phone Number</span><br/>
            <input style={{border:"none",background:"#f2f2f2",padding:5,width:300}} type="text"></input><br/><br/>
            <span style={{fontWeight:"800"}}>Email Address</span><br/>
            <input style={{border:"none",background:"#f2f2f2",padding:5,width:300}} type="email"></input><br/><br/>
            </div>

            <div style={{paddingTop:120,paddingLeft:200}}>
              <div style={{display:"flex",flexDirection:"row",}}>
                <img style={{height:35}} src={logoo} alt="ll"></img>&nbsp;&nbsp;
                <span style={{color:"#000", fontSize: 20, fontWeight: '500',}}>item name</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span style={{color:"#000",fontSize: 20,fontWeight:500}}>RS.120</span>
               </div> <br></br>
               <span style={{color:"#000", fontSize: 20, fontWeight: '500',}}>Subtotal:</span>
               <span style={{color:"#000",fontSize: 20,fontWeight:500,paddingLeft:176}}>RS.120</span>
               <hr></hr>
               <span style={{color:"#000", fontSize: 20, fontWeight: '500',}}>Total:</span>
               <span style={{color:"#000",fontSize: 20,fontWeight:500,paddingLeft:210}}>RS.120</span><br/><br/><br/>
               <button className="btnporder">Place Order</button>
            </div>
           
               
            </div>
        </>
    )
}
export default Orderbuy;
