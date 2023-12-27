import Navbar from './components/navBar/Navbar'
import ItemListContainer from './components/itemsListContainer/ItemListContainer'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import Cart from './components/cart/Cart'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
        <Route path='cart' element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App
