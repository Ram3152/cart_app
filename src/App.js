import React from 'react';
import "./styles/app.scss"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast"
import Cart from "./components/Cart";

import ProductDetailsPage from "./components/ProductDetailsPage"; 

import Wishlist from "./components/Wishlist"; 

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<ProductDetailsPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
