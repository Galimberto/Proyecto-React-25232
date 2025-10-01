import { Item } from "../Item/Item"

export const ItemDetail = ({detail}) => {
  return (
    <Item {...detail}>
      <p>Envios sin cargo dentro de CABA</p>
      <button>Enviar al carrito</button>
    </Item>

  )
}

