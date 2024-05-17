import React from 'react';
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from 'react-redux';
import logo from '../assets/Screenshot (43).png';

const Header = () => {
  const { cartItem } = useSelector(state => state.cart);

  const handleFilter = ( category) => {
    const allProducts = [];
    const filteredProducts = allProducts.filter(product => product.category === category);
    console.log(filteredProducts); 
  };
  

  return (
    <nav>
      <div className='head'>
        <img src={logo} alt="logo" width='80' height='80' style={{ borderRadius: '60%' }} />
        <h2>🅢🅣🅞🅡🅔 🅢🅣🅐🅒🅚🅔🅡</h2>
      </div>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/wishlist'}>Wishlist</Link>
        <Link to={'/cart'}>
          <FiShoppingBag />
          <p>{cartItem.length}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
