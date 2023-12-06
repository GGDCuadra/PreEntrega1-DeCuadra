import React from 'react';
import CartWidget from '../cartWidget/CartWidget';
import categoriesMocks from '../../mocks/categories-mocks.json';

function Navbar() {
  const select = (event) => {
    console.log(event.target.value)
  }
  return (
    <nav className='bg-slate-600 flex p-10 items-center justify-between'>
      <div className="flex items-center text-white">
        <h1 className='text-2xl mr-5'>TecnoShop</h1>
      </div>
      <div className='flex items-center gap-3 text-white'>
        <select name="categories" id="categories" className='bg-slate-600 rounded-lg' onChange={select}>
        <option selected disabled hidden>Selecione una categoria</option>
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
