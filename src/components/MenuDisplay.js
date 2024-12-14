import React from "react";
import MenuItem from "./MenuItem";
import menuData from "../data";

function MenuDisplay({ addToCart }) {

  const categories = ["Plats", "Salades", "Soupe", "Desserts"];

  return (
    <div className="menu-display">
      <h2>Explore Our Menu</h2>
      {categories.map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          <div className="menu-grid">
            {menuData
              .filter((item) => item.category === category) 
              .map((item) => (
                <MenuItem key={item.id} item={item} addToCart={addToCart} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MenuDisplay;
