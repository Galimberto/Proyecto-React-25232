import { Item } from "../Item/Item"
import { useCartContext } from "../../context/CartContext/useCartContext"
import './ItemDetail.css'

export const ItemDetail = ({detail}) => {
  const {addItem} = useCartContext()

  return (
    <div className="container-detail">
      <h2>Detalle del producto:</h2>
      <Item {...detail}>
        <p>{detail.info}</p>
        <p>Envios sin cargo dentro de CABA</p>
        <button onClick={() => addItem(detail)}>Enviar al carrito</button>
      </Item>
    </div>

  )
}

