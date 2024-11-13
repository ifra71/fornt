// src/components/ProductList.js

import React, { useState, useEffect } from 'react';
import ProductForm from './ProductForm';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:5000/products/${id}`, { method: 'DELETE' });
    setProducts(products.filter((product) => product._id !== id));
  };

  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      <ProductForm onAddProduct={addProduct} />
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map((product) => (
          <div className="product-item" key={product._id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => deleteProduct(product._id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductList;
