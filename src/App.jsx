import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ItemListContainer titulo={"Bienvenidos a la tienda de Bicimark"} />}/>            
          <Route path='/detail/:id' element={<ItemDetailContainer />} />                      
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
