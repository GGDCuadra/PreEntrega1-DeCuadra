import React from 'react';
import CartWidget from '../cartWidget/CartWidget';
import categoriesMocks from '../../mocks/categories-mocks.json';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const select = (event) => {
    const selectedCategory = event.target.value;

    if (selectedCategory === 'All') {
      navigate('/');
    } else {
      navigate(`/category/${selectedCategory}`);
    }
  };

  return (
    <nav className='bg-slate-600 flex p-10 items-center justify-between'>
      <div className="flex items-center text-white">
        <Link to="/">
          <h1 className='text-2xl mr-5'>TecnoShop</h1>
          
        </Link>
        <Link to="/">
        <button>Home</button>
        </Link>
        
      </div>
      <div className='flex items-center gap-3 text-white'>
        <select name="categories" id="categories" className='bg-slate-600 rounded-lg' onChange={select}>
          <option selected disabled hidden>Seleccione una categoría</option>
          <option value="All">Ver todo</option>
          {categoriesMocks.categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </div>
      <CartWidget />
    </nav>
  );
}

export default Navbar;
