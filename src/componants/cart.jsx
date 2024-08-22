import React from 'react';
import { useCart } from '../hooks/useCart';
import AddedProduct from '../componants/addedProducts';
import Header from '../componants/Header';
import Footer from '../componants/Footer';

const Cart = () => {
  const { cart } = useCart();

  console.log(cart+"hjhhhhh"); // Check if this logs the updated cart correctly

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-green-50 via-purple-50 to-gray-50">
      <Header title="Cart" />
      <main className="flex-grow pt-12 text-xl px-10 md:px-40 text-center">
        <h2 className="text-3xl font-semibold mb-6">Your Cart</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.length > 0 ? (
            cart.map(product => (
              <AddedProduct
                key={product.id}
                image={product.image}
                name={product.model}
                price={product.price}
              />
            ))
          ) : (
            <p className="text-lg">Your cart is empty.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};


export default Cart;
