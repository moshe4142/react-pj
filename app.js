// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import { CartProvider } from './contexts/CartContext';

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById('root')
);


