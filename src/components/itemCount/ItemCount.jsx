import React from 'react';
import useItemCount from '../../hooks/useItemCount';

const ItemCount = ({ onAdd }) => {
  const { count, handleIncrease, handleDecrease, handleAddToCart } = useItemCount(1, onAdd);

  return (
    <div>
      <div className='mb-4'>
        <button className="bg-blue-500 text-white px-3 py-1 rounded-md" onClick={handleDecrease}>-</button>
        <span className='m-4'>{count}</span>
        <button className="bg-blue-500 text-white px-3 py-1 rounded-md" onClick={handleIncrease}>+</button>
      </div>
      <button className="bg-blue-500 text-white px-3 py-1 rounded-md" onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
