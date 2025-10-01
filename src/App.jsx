import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import './App.css'

function App() {
  

  return (
    <>
      <div>
        <Header />
        <ItemListContainer titulo={"Bienvenidos a la tienda de Embark"} />
        <hr />
        <ItemDetailContainer />
        <Footer />
      </div>
    </>
  )
}

export default App
