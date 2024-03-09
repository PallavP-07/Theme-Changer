// ThemeChanger.js

import React from "react";
import { useTheme } from "./theme-context";
import { FaSun, FaMoon } from 'react-icons/fa';
// Product component
const Product = ({ image, title, description, price }) => {
  return (
    <div className="product">
      <img src={image} alt={title} />
      <div className="product-info">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Price: ${price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

// ThemeChanger component
const ThemeChanger = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="ecommerce-page">
      <div>
        {/* <input
          type="checkbox"
          onChange={toggleTheme}
          checked={theme === "dark"}
        /> */}
        <p>change your theme:</p>
        <button onClick={toggleTheme} value={theme === "dark"}>{theme === "light" ? <FaMoon /> : <FaSun />}</button>
      </div>
      <h1>Welcome to our E-commerce Store</h1>
      <div className="product-container">
        <Product
          image="https://images.unsplash.com/photo-1603191659812-ee978eeeef76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fHNob2VzfGVufDB8fDB8fHww"
          title="Product 1"
          description="Description of Product 1"
          price={19.99}
        />
        <Product
          image="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNob2VzfGVufDB8fDB8fHww"
          title="Product 2"
          description="Description of Product 2"
          price={24.99}
        />
        <Product
          image="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHNob2VzfGVufDB8fDB8fHww"
          title="Product 3"
          description="Description of Product 3"
          price={29.99}
        />
      </div>
    </div>
  );
};

export default ThemeChanger;
