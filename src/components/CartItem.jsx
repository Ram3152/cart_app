import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const CartItem = ({ imgSrc, name, price, qty, decrement, increment, deleteHandler, id }) => {
  return (
    <div className="cartItem">
      <img src={imgSrc} alt='Item' />
      <article>
        <h3>{name}</h3>
        <p>₹{price.toFixed(2)}</p> 
      </article>
      <div>
        <button onClick={() => decrement(id)}>-</button>
        <p>{qty}</p>
        <button onClick={() => increment(id)}>+</button>
      </div>
      <AiFillDelete onClick={() => deleteHandler(id)} />
    </div>
  );
};

export default CartItem;
