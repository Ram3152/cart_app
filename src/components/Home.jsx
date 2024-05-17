import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import ProductCard from './ProductCard';

const Home = () => {
  const [productList, setProductList] =  useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProductList(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addToCartHandler = (option) => {
    dispatch({
      type: "addToCart",
      payload: option,
    });
    dispatch({
      type: "calculatePrice"
    });
    toast.success("Added To Cart");
  };

  return (
    <div className="home">
      {productList.map((product) => (
        <ProductCard
          key={product.id}
          name={product.title}
          imgSrc={product.image}
          price={product.price}
          id={product.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
}

export default Home;
