// src/components/Header.jsx
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import useCart from '../hooks/useCart'; // Adjust the path as needed

const Header = ({ title }) => {
  const { cartItems, removeFromCart } = useCart() || { cartItems: [], removeFromCart: () => { } };
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className="absolute top-0 left-0 fixed z-[10] w-full m-0">
      <div className="bg-gray-100 w-full drop-shadow-md flex items-center justify-between px-8 py-6"> {/* Increased padding */}
        <div className="flex items-center">
          <button
            onClick={toggleCart}
            className="text-xl font-medium text-blue-500 hover:text-blue-700 focus:outline-none"> {/* Changed color to light blue */}
            Cart
          </button>
        </div>
        <div className="flex-grow text-center">
          <h1 className="text-black text-3xl font-bold">{title}</h1>
        </div>
        <div className="flex items-center">
          <Link to="/">
            <img src="./images/myLogo.png" alt="logo" className="w-[40px] h-[40px]" />
          </Link>
        </div>
      </div>
      <nav className="bg-gray-200 py-2">
        <div className="flex justify-around w-3/4 mx-auto">
          <NavLink
            to="/"
            className="text-gray-700 font-medium py-2 px-4 hover:bg-gray-300 rounded transition-colors"
          >
            Home
          </NavLink>
          <NavLink
            to="/contactus"
            className="text-gray-700 font-medium py-2 px-4 hover:bg-gray-300 rounded transition-colors"
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/branches"
            className="text-gray-700 font-medium py-2 px-4 hover:bg-gray-300 rounded transition-colors"
          >
            Branches
          </NavLink>
          <NavLink
            to="/login"
            className="text-gray-700 font-medium py-2 px-4 hover:bg-gray-300 rounded transition-colors"
          >
            Login
          </NavLink>
        </div>
      </nav>

      {/* Sidebar for Cart */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{ width: '300px' }}
      >
        <div className="flex justify-between items-center p-4 bg-gray-200">
          <h2 className="text-lg font-bold">Shopping Cart</h2>
          <button
            onClick={toggleCart}
            className="text-lg font-bold text-blue-500 hover:text-blue-700 focus:outline-none"> {/* Changed color to light blue */}
            &times;
          </button>
        </div>
        <div className="p-4">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item, i) => (
                <li key={`${item.id}-${i}`} className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-bold">{item.model}</h3>
                    <p>${item.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 focus:outline-none">
                    &times;
                  </button>
                </li>
              ))}
            </ul>

          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
