import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../mocks/products-mocks.json';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const showProduct = new Promise((resolve, reject) => {
      const productDetails = products.find((product) => product.id === parseInt(id));

      if (productDetails) {
        setTimeout(() => {
          resolve(productDetails);
        }, 1000);
      } else {
        reject(new Error('No se encontró el producto.'));
      }
    });

    showProduct
      .then((result) => {
        setProduct(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="max-w-lg mx-auto p-8 border border-gray-300 rounded shadow">
      {product ? (
        <>
          <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-indigo-700">Precio (ARS): ${product.priceARS}</p>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;

