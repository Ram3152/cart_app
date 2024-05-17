import React, { useState } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import scannerImage from '../assets/scanner.png (2).jpg';

const Cart = () => {
  const { cartItem, subTotal, tax, shipping, total } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [showScanner, setShowScanner] = useState(false); 
  const increment = (id) => {
    dispatch({
      type: " addToCart ",
      payload: { id },
    });
    dispatch({
      type: "calculatePrice"
    });
  }

  const decrement = (id) => {
    dispatch({
      type: "decrement",
      payload: id,
    });
    dispatch({
      type: "calculatePrice"
    });
  }

  const deleteHandler = (id) => {
    dispatch({
      type: "deleteFromCart",
      payload: id,
    });
    dispatch({
      type: "calculatePrice"
    });
  }

  const handleCheckout = () => {
    setShowScanner(true); 
  }

  return (
    <div className='cart'>
      <main>
        {cartItem.length > 0 ? (
          cartItem.map((item) => (
            <CartItem
              key={item.id}
              imgSrc={item.imgSrc}
              name={item.name}
              price={item.price}
              qty={item.quantity}
              id={item.id}
              decrement={decrement}
              increment={increment}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <h2>No Items Selected</h2>
        )}
      </main>
      <aside>
        <h2>Subtotal : ${subTotal.toFixed(2)}</h2>
        <h2>Shipping : ${shipping.toFixed(2)}</h2>
        <h2>Tax : ${tax.toFixed(2)}</h2>
        <h2>Total : ${total.toFixed(2)}</h2>
        <button onClick={handleCheckout} className="checkout-btn">Checkout</button>
      </aside>

      {/* Display the scanner only when showScanner is true */}
      {showScanner && (
        <div className="scanner-container">
          <img src={scannerImage} alt="Scanner" className="scanner-img" />
          <p>Please use the scanner to complete your payment.</p>
        </div>
      )}
    </div>
  );
}

const CartItem = ({ imgSrc, name, price, qty, decrement, increment, deleteHandler, id }) => (
  <div className="cartItem">
    <img src={imgSrc} alt='Item' />
    <article>
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
    </article>
    <div>
      <button onClick={() => decrement(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increment(id)}>+</button>
    </div>
    <AiFillDelete onClick={() => deleteHandler(id)} />
  </div>
);

export default Cart;