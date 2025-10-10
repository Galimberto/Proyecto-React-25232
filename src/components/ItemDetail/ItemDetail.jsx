import { Item } from "../Item/Item"
import './ItemDetail.css'

export const ItemDetail = ({detail}) => {
  return (
    <div className="container-detail">
      <h2>Detalle del producto:</h2>
      <Item {...detail}>
        <p className="product-txt">{detail.info}</p>
        <p className="product-txt">Envios sin cargo dentro de CABA</p>
        <button>Enviar al carrito</button>
      </Item>
    </div>

  )
}

