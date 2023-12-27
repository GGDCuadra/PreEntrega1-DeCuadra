import { useState } from 'react';

const useItemCount = (initial = 1, onAdd) => {
  const [count, setCount] = useState(initial);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(count);
  };

  return {
    count,
    handleIncrease,
    handleDecrease,
    handleAddToCart,
  };
};

export default useItemCount;
