import Navbar from "../navBar/Navbar";
import ItemListContainer from "../itemsListContainer/ItemListContainer";
function Home() {
  return (
    <>
      <main className="bg-slate-400 justify-center flex flex-col">
        <ItemListContainer/>
      </main>
    </>
  );
}

export default Home;
