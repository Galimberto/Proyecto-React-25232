import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"

function App() {
  

  return (
    <>
      <div>
        <Header />
        <ItemListContainer titulo={"Bienvenidos a la tienda de Embark"} />
        <Footer />
      </div>
    </>
  )
}

export default App
