import React from 'react';

const ProductCard = ({ name, imgSrc, price, id, handler }) => (
  <div className='productCard'>
    <img src={imgSrc} alt={name}/>
    <h2>{name}</h2>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add To Cart
    </button>
  </div>
);

export default ProductCard;
