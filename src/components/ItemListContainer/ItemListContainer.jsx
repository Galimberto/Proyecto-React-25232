import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import './ItemListContainer.css'

export const ItemListContainer = ({titulo}) => {
  const [products, setProducts] = useState([])
  const {category} = useParams()
  const BASE_URL = "https://690a71401a446bb9cc2290c2.mockapi.io/products";
  {/* "/data/products.json" */ }
  useEffect(() => {
    fetch(BASE_URL).then((res) => {
      if(!res.ok){
        throw new Error("Hubo un problema al buscar productos")
      }
      return res.json()
    })
    .then((data) => {
      if(category){
        setProducts(data.filter((prod)=> prod.category === category))
      } else {
        setProducts(data)
      }
    })
    .catch((err) => {
      console.log(err)
    });

  }, [category])

  return (
    <section >
      <h2>{titulo}<span className="text-category">{category}</span></h2>
      <ItemList lista={products}/>
    </section>
  )
}
