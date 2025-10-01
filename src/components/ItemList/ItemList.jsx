import { Item } from "../Item/Item"

export const ItemList = ({lista}) => {
  return (
    <div className="galeria">
      {lista.length 
      ? lista.map((prod) => (
      <Item key={prod.id} {...prod}>
        <button>Comprar</button>
      </Item>) ) 
      : <p>No hay productos</p> }
    </div>
  )
}
