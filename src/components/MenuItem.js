import React from "react";

function MenuItem({ item, addToCart }) {
  return (
    <div className="menu-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p> Price: {item.price}DA</p>
      <button onClick={() => addToCart(item)}>+ Add to Cart</button>
    </div>
  );
}

export default MenuItem;
