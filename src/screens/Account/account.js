import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./account.css"
import user from "../../assets/userr.png"

const Account = () => {
    return(
        <>
           <div>
            <Navbar/>
           </div>

           <div className="accountmaincontainer">
            <div className="rootcontainer">
                <div className="leftsidediv">
                    <div className="Profile">
                        <img style={{width:40,height:40}} src={user} alt="kl"></img>
                        <div><span style={{paddingLeft:25}}>Hello,</span><br></br>
                        <span style={{paddingLeft:25,fontWeight:1000,fontSize:20}} >Dharmik Tandel</span></div>
                    </div>
                    <div className="accountsetting">
                        <h3 style={{paddingTop:10,paddingLeft:20}}>MY ORDERS</h3>
                        <hr></hr>
                        <h3 style={{paddingLeft:20}}>ACCOUNT SETTINGS</h3>
                        <li style={{listStyle:"none",paddingLeft:40}}>Profile Information</li>
                        <li style={{listStyle:"none",paddingLeft:40}}>Manage Address</li>
                        <li style={{listStyle:"none",paddingLeft:40}}>Pan Card Information</li>
                    </div>
                </div>
                <div className="rightsidediv">
                   <h2 style={{fontWeight:"800"}}>Personal Information</h2>
                   <span style={{fontSize:15,fontWeight:"548"}}>First Name:</span>&nbsp;
                   <span style={{fontSize:20}}>Dharmik</span><br/>
                   <span style={{fontSize:15,fontWeight:"548"}}>Last Name:</span>&nbsp;
                   <span style={{fontSize:20}}>Tandel</span><br/>
                   <h2 style={{fontWeight:"800"}}>Your Gender</h2>
                  {/* <input style={{height:15,justifyContent:"center",alignItems:"center"}} type="radio"></input>&nbsp;&nbsp; */}
                  <span style={{fontSize:15}}>Male</span>&nbsp;&nbsp;
                  {/* <input style={{height:15}} type="radio"></input>&nbsp;&nbsp; */}
                  <span style={{fontSize:15}}>Female</span><br></br><br></br>
                  <h2 style={{fontWeight:"800"}}>Email Address</h2>
                  <span style={{fontSize:20}}>tandelk@gmail.com</span><br/><br/>
                  {/* <input style={{padding:7,width:200}} type="email" placeholder="email"></input><br></br><br></br> */}
                  <h2 style={{fontWeight:"800"}}>Mobile Number</h2>
                  <span style={{fontSize:20}}>8866279670</span>
                  {/* <input style={{padding:7,width:200}} type="text" placeholder="number"></input>&nbsp;&nbsp;&nbsp; */}
                </div>
            </div>
           </div>
        </>
    )
}
export default Account;