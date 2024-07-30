import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import banner from '../../assets/banner-2.png';
import "./Product.css"
import { useNavigate } from 'react-router-dom'
import axios from "axios";


const Products = () => {

  const [allProduct,setAllProduct] = useState([])


  const redirect = useNavigate();

  const fetchProductApi = async () => {
    try{
      const response = await axios.get("https://dummyjson.com/products")
      setAllProduct(response.data.products)
      console.log(response.data.products);
    }
    catch (error){
        console.error(error)
    }
  }

  const productdtl = (item)=> {
     redirect("/addtocart", { state: { item } })
  }

  useEffect (()=> {
    fetchProductApi()
  },[])

  return(
    <>
        <div className="productss">
            {
              allProduct.map((item)=> (
                <button key={item.id} onClick={()=> productdtl(item)} className="btnproduct">
            <img style={{height:200,width:370}} src={item.thumbnail} alt="product thumbnail"></img>
            <span style={{fontWeight:'700',fontSize:20}}>{item.title}</span>
            <span style={{fontWeight:'400',fontSize:15,textAlign:'left'}}>{item.description}</span>
            <span style={{color:"red",fontWeight:1000}}>{item.price}</span>
            </button> 
              ))
            } 
        </div>
    </>
  )
}
export default Products;