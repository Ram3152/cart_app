import React, { useState } from 'react';
import '../styles/Wishlist.scss';

const Wishlist = () => {
  // State to manage the list of wishlist items
  const [wishlistItems, setWishlistItems] = useState([]);

  // Function to add an item to the wishlist
  const addItemToWishlist = (item) => {
    setWishlistItems([...wishlistItems, item]);
  };

  // Function to remove an item from the wishlist
  const removeItemFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  return (
    <div className="wishlist-container">
      <h1>Wishlist</h1>
      {/* Display wishlist items */}
      <ul className="wishlist-items">
        {wishlistItems.map(item => (
          <li key={item.id}>
            <span className="item-name">{item.name}</span>
            <span className="item-price">${item.price}</span>
            <button className="remove-btn" onClick={() => removeItemFromWishlist(item.id)}>Remove</button>
          </li>
        ))}
      </ul>

      {/* Input form to add items to the wishlist */}
      <form className="add-item-form" onSubmit={(e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = parseFloat(e.target.price.value);
        const id = Math.floor(Math.random() * 1000) + 1; // Generate a random ID
        addItemToWishlist({ id, name, price });
        e.target.reset();
      }}>
        <input type="text" name="name" placeholder="Enter product name" required />
        <input type="number" name="price" placeholder="Enter product price" step="0.01" required />
        <button type="submit">Add to Wishlist</button>
      </form>
    </div>
  );
};

export default Wishlist;
