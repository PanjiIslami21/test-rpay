import React, { useState } from 'react';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const checkout = () => {
    if (cart.length === 0) {
      alert('Drag products into the shopping cart before checking out.');
    } else {
      console.log('Checkout:', cart);
    }
  };

  return (
    <div>
      <ProductList addToCart={addToCart} />
      <ShoppingCart cart={cart} checkout={checkout} />
    </div>
  );
};

export default App;
