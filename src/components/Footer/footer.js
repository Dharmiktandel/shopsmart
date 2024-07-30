import React from "react";
import "./footer.css"

const Footer = () => {
    return(
        <>
           <div className="footercontainer">
             <div className="exclussivee">
                <h4 style={{color:"white"}}>Exclusive</h4>
                <button className="btnsubscribe">Subscribe</button><br/>
                <span style={{color:"white",fontSize:14}}>get 10% of your first order</span>
             </div>
             <div>
                <h4 style={{color:"white"}}>Support</h4>
                <span style={{color:"white",fontSize:14}}>111 Bijay Sarani,Dhaka,<br/> DH 1515,Bangladesh.</span><br/>
                <span style={{color:"white",fontSize:14}}>exclusive@gmail.com</span><br/>
                <span style={{color:"white",fontSize:14}}>+88015-88888-9999</span>
             </div>
             <div>
                <h4 style={{color:"white"}}>Account</h4>
                <button className="btnaccount">My Account</button><br/>
                <button className="loginbutton">Login</button><br/>
                <button className="refisterbutton">Register</button>
             </div>
             <div>
                <h4 style={{color:"white"}}>Quick Link</h4>
                <button className="privacy">Privacy Policy</button><br/>
                <button className="term">Terms Of Use</button><br/>
                <button className="faq">FAQ</button><br/>
             </div>
           </div>
        </>
    )
}
export default Footer;