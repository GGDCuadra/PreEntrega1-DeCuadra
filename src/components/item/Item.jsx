import React from 'react';
import ItemCount from '../itemCount/ItemCount';
import { Link } from 'react-router-dom';

function Item({ name, description, categoryId, id, priceARS }) {
    return (
      <div key={id} className="bg-white p-4 shadow-md rounded-md mb-4">
        <h1 className="text-xl font-semibold mb-2">{name}</h1>
        <p>Precio: {priceARS}</p>
        <Link to={`/item/${id}`}>
            <button className='bg-blue-500 text-white px-3 py-1 rounded-md m-4'>Ver Producto</button>
        </Link>
        <ItemCount/>
      </div>
    );
  }

export default Item;
