import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from './context/CartContext/CartProvider'
import { Cart } from './components/Cart/Cart'
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer/ProductFormContainer'
import './App.css'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Header />
          <main className='container'>
            <h1>Bicicleteria "La tuerca Partida"</h1>
            <Routes>
              <Route path='/' element={<ItemListContainer titulo={"Bienvenidos a el catalogo de productos"} />}/>   
              <Route path='/category/:category' element={<ItemListContainer titulo={"Productos por categoria: "} />}/>         
              <Route path='/detail/:id' element={<ItemDetailContainer />} />
              <Route path='/carrito' element={<Cart/>} />
              <Route path='/admin' element={<ProductFormContainer/>} />                          
            </Routes>
          </main>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
