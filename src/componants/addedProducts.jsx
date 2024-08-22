// src/components/AddedProduct.jsx
import React from 'react';

const AddedProduct = ({ image, name, price }) => (
  <div className="border p-4 rounded-lg shadow-lg bg-white">
    <img src={image} alt={name} className="w-full h-auto mb-4 rounded-lg" />
    <h3 className="text-2xl font-bold">{name}</h3>
    <p className="text-lg">${price}</p>
  </div>
);

export default AddedProduct;
