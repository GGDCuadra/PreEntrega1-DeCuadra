import Navbar from './components/navBar/Navbar'
import ItemListContainer from './components/itemsListContainer/ItemListContainer'

function App() {
  const greeting = "Bienvenido a Tecno Shop"
  return (
    <>
      <header><Navbar/></header>
      <main className="bg-slate-400 justify-center flex flex-col">
        <ItemListContainer greeting={greeting}/>
      </main>
    </>
  )
}

export default App
