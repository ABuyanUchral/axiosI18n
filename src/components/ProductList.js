import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import api from '../axios';

const ProductList = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold">{t('products')}</h1>
      </header>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-bold">{product.title}</h2>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover mb-2 rounded"
            />
            <p className="mb-2">{product.description}</p>
            <p className="mb-2 text-lg font-bold">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="px-4 py-2 text-white bg-gray-800 rounded hover:bg-gray-600"
            >
              {t('addToCart')}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">{t('cart')}</h2>
        <ul className="space-y-4">
          {cart.map((item, index) => (
            <li key={index} className="p-4 bg-white rounded shadow">
              {item.title} - ${item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
