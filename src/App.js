import React from "react";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Signin from "./screens/Login/Signin";
import ProductDetail from "./screens/ProductDetail/productdetails";
import Addtocart from "./screens/Addtocartt/addtocart";
import Account from "./screens/Account/account";
import Orderbuy from "./screens/Orderbuy/orderbuy";
import { Provider } from 'react-redux';
import store from "./redux/store";
import Cat from "./screens/categories/categories";
import Bill from "./screens/Finalbill/bill";
import CustomerRegistration from "./screens/Register/CustomerRegistration";
import VendorRegistration from "./screens/Register/VendorRegistration";
import Dashboard from "./screens/VendorDashboard/Dashboard";
import VendorShop from "./screens/VendorIndividualProduct/VendorShop"; // Ensure this path is correct

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/customerRegistration" element={<CustomerRegistration />} />
          <Route path="/vendorRegistration" element={<VendorRegistration />} />
          <Route path="/productDetail" element={<ProductDetail />} />
          <Route path="/addtocart" element={<Addtocart />} />
          <Route path="/account" element={<Account />} />
          <Route path="/order" element={<Orderbuy />} />
          <Route path="/cat" element={<Cat />} />
          <Route path="/bill" element={<Bill />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vendor/:shopname" element={<VendorShop />} /> {/* Fixed path */}
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
