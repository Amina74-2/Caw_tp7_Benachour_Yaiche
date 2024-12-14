import React, { useState } from "react";
import MenuDisplay from "./components/MenuDisplay";
import Cart from "./components/Cart";
import { placeOrder } from "./order";
import "./assets/style.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== item.id));
  };

  return (
    <div className="app">
      <h1>Elegant Flavors's Menu</h1>  {}
      <MenuDisplay addToCart={addToCart} />
      <Cart cartItems={cart} removeFromCart={removeFromCart} />
      {cart.length > 0 && (
        <button style={{ marginTop: "20px" }} onClick={() => placeOrder(cart)}>
          Place Order
        </button>
      )}
    </div>
  );
}

export default App;
