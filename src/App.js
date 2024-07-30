import React from "react";
import logo from './logo.svg';
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Signin from "./screens/Login/Signin";
import Signup from "./screens/Register/Signup";
import ProductDetail from "./screens/ProductDetail/productdetails";
import Addtocart from "./screens/Addtocartt/addtocart";
import Account from "./screens/Account/account";
import Orderbuy from "./screens/Orderbuy/orderbuy";
import {Provider} from 'react-redux'
import store from "./redux/store";
import Cat from "./screens/categories/categories";



function App() {
  return (
    <Router>
    <Provider store={store}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/productDetail" element={<ProductDetail/>}/>
      <Route path="/addtocart" element={<Addtocart/>}/>
      <Route path="/account" element={<Account/>}></Route>
      <Route path="/order"  element={<Orderbuy/>}></Route>
      <Route path="/cat" element={<Cat />} />
    </Routes>
    </Provider>
    </Router>  
    
    
    
    
    
    
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
