import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({children}) => {
  const[cart, setCart]= useState([])
  
  const exists = (id) => {
    const exist = cart.some((p) => p.id === id);
    return exist
  }
  
  const addItem = (item) => {
    if (exists(item.id)) {
      // map, cuido mutacion a nivel array
      const updatedCart = cart.map((prod) => {
        if (prod.id === item.id) {
          //cuido mutacion a nivel de objeto
          return {...prod, quantity: prod.quantity + item.quantity}
        }else {
          return prod
        } 
      })
      setCart(updatedCart)
      alert('Agregando al carrito')
    } else{
      setCart([...cart,item]);
      alert(`${item.name} Agregando al carrito`)
    }
  }  

  const clearCart = () => setCart([]) 

  const getTotalItems = () => {
    if (cart.length){
      return cart.length
    }
  }
  const values = {cart, addItem, clearCart, getTotalItems}
  return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  )
}

