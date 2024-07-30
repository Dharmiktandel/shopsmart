import React,{useState} from "react";
import banner from '../../assets/banner-2.png';
import Navbar from "../../components/Navbar/Navbar";
import "./Signup.css";
import { setRegisterdata } from "../../redux/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
//import Signin from "../Login/Signin";

const Signup = () => {

    const[firstname,setFirstname] = useState("")
    const[lastname,setLastname] = useState("")
    const[phone,setPhone] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")

    const[errors,setErrors]=useState("")

    const dispatch = useDispatch()
    const nav = useNavigate()

    function validation(){
        
        const errors = {}

        const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
        const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

        if(firstname === ""){
            errors.firstname = "first name is required";
        }
        else if(firstname.match(/[0-9]/)){
            errors.firstname = "please enter valid first name";
        }
        
        if(lastname === ""){
            errors.lastname = "last name is required";
        }
        else if(lastname.match(/[0-9]/)){
            errors.lastname = "please enter valid last name";
        }

        if(phone === ""){
            errors.phone = "phone number is required";
        }
        else if(phone.match(/^[a-zA-Z]*$/) || phone.length>10 || phone.length<10){
            errors.phone = "please enter valid phone number"
        }

        if(email === ""){
           errors.email = "email is required";
        }
        else if(!email_pattern.test(email)){
            errors.email = "Email did not match"
        }

        if(password === ""){
            errors.password = "password is required"
        }
        else if(!password_pattern.test(password)){
            errors.password = "password did not match"
        }
        return errors;

        
    }


    function handlevalidation(e){
        e.preventDefault();
        const registerData = {firstname,lastname,phone,email,password}
        const errors = validation();
        if(Object.keys(errors).length === 0)
        {
            dispatch(setRegisterdata(registerData))
            console.log('data',registerData)
            nav("/signin");
            setErrors({}); 
        }
        else
        {
            setErrors(validation())
            console.log('errors'); 
        }
        
    }
    return(
          <>
             <div>
                <Navbar/>
             </div>
            
            <div>
                <div className="signupcontainer">
                <img style={{height:470,width:850}} src={banner} alt="bnrlogo"></img>
                <div className="registerform">
                <span style={{fontWeight:900,fontSize:30}}>Create an account</span>
                <br></br>
                <span style={{fontSize:15,fontWeight:500}}>Enter your detail below</span><br></br>
                <br></br>
                <br></br>
                <input className="inpt" type="text" placeholder="Enter First Name" onChange={(e)=>setFirstname(e.target.value)}></input>
                {errors.firstname && <p className="paragraph">{errors.firstname}</p>}
                <br></br><br></br>
                <input className="inpt" type="text" placeholder="Enter Last Name" onChange={(e)=>setLastname(e.target.value)}></input>
                {errors.lastname && <p className="paragraph">{errors.lastname}</p>}
                <br></br><br></br>
                <input className="inpt" type="text" placeholder="Enter Phone Number" onChange={(e)=>setPhone(e.target.value)}></input>
                {errors.phone && <p className="paragraph">{errors.phone}</p>}
                <br></br><br></br>
                <input className="inpt" type="email" placeholder="Enter Email Address" onChange={(e)=>setEmail(e.target.value)}></input>
                {errors.email && <p className="paragraph">{errors.email}</p>}
                <br></br><br></br>
                <input className="inpt" type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}></input>
                {errors.password && <p className="paragraph">{errors.password}</p>}
                <br></br><br></br>
                <button onClick={handlevalidation} className="btnregister">Register</button><br></br><br></br>
                <span style={{fontSize:15}}>Already have an account? <a href="./signin" style={{background:"none",border:"none",color:"#063970"}}> Login</a></span>
                </div>
                </div>
            </div>
          </>
    )
}
export default Signup;