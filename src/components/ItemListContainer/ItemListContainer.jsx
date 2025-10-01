import { ItemList } from "../ItemList/ItemList"

export const ItemListContainer = ({titulo, productos}) => {
  //estado

  //llamada a una api

  return (
    <section>
      <h1>{titulo}</h1>
      <ItemList lista={productos}/>
    </section>
  )
}
