import React from "react";

function Cart({ cartItems, removeFromCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>My Basket</h2>
      {cartItems.length === 0 ? <p>Your cart is empty</p> : null}
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <span>Price: {item.price}DA</span>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total:  {total}DA</h3>
    </div>
  );
}

export default Cart;
