import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import scannerImg from '../assets/scanner.png.jpg'; 
import '../styles/cart.scss'; 

const Cart = () => {
  const { cartItem, subTotal, tax, shipping, total } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [showScanner, setShowScanner] = useState(false); // State to manage scanner image visibility

  const increment = (id) => {
    dispatch({
      type: 'addToCart',
      payload: { id },
    });
    dispatch({
      type: 'calculatePrice'
    });
  };

  const decrement = (id) => {
    dispatch({
      type: 'decrement',
      payload: id,
    });
    dispatch({
      type: 'calculatePrice'
    });
  };

  const deleteHandler = (id) => {
    dispatch({
      type: 'deleteFromCart',
      payload: id,
    });
    dispatch({
      type: 'calculatePrice'
    });
  };

  const handleCheckoutClick = () => {
    setShowScanner(true); // Show the scanner image on single click
  };

  const handleCheckoutDoubleClick = () => {
    setShowScanner(false); // Hide the scanner image on double click
  };

  return (
    <div className='cart'>
      <main>
        {cartItem.length > 0 ? (
          cartItem.map((i) => (
            <CartItem
              imgSrc={i.imgSrc}
              name={i.name}
              price={i.price}
              qty={i.quantity}
              id={i.id}
              key={i.id}
              decrement={decrement}
              increment={increment}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <h2>No Item Yet Selected</h2>
        )}
      </main>
      <aside>
        <h2>Subtotal: ${subTotal.toFixed(2)}</h2>
        <h2>Shipping: ${shipping.toFixed(2)}</h2>
        <h2>Tax: ${tax.toFixed(2)}</h2>
        <h2>Total: ${total.toFixed(2)}</h2>
        <button 
          className="checkout-btn" 
          onClick={handleCheckoutClick} 
          onDoubleClick={handleCheckoutDoubleClick}
        >
          Checkout
        </button>
        {showScanner && (
          <div className="scanner-container">
            <img src={scannerImg} alt="Scanner" className="scanner-img" />
            <p>Scan to Pay</p>
          </div>
        )}
      </aside>
    </div>
  );
};

export default Cart;
