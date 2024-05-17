import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product details :', error);
    }
  };

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <h4>${product.price}</h4>
          <button>Add To Cart</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductDetailsPage;
