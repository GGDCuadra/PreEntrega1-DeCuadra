import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../mocks/products-mocks.json';
import Item from '../item/Item';

function ItemListContainer() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { categoryId } = useParams(); 
  console.log(categoryId);
  useEffect(() => {
    const showProducts = new Promise((resolve, reject) => {
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 1000);
      } else {
        reject(new Error('No hay productos disponibles.'));
      }
    });

    showProducts
      .then((result) => {
        const filtered = categoryId
          ? result.filter((product) => product.categoryId === parseInt(categoryId))
          : result;

        setFilteredProducts(filtered);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  return (
    <div className="text-center flex flex-wrap justify-around">
      {filteredProducts.map((product) => (
        <Item
        key={product.id}
        id={product.id}
        name={product.name}
        categoryId={product.categoryId}
        priceARS={product.priceARS}
        description={product.description}
        />
      ))}
    </div>
  );
}

export default ItemListContainer;
