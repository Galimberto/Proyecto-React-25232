import {useState, useEffect} from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({})
  const BASE_URL = "https://690a71401a446bb9cc2290c2.mockapi.io/products";
  const {id} = useParams()
  {/* "/data/products.json" */}

  useEffect(() => {
    fetch(BASE_URL)
    .then((res) => {
      if(!res.ok){
        throw new Error("No se encontro el producto")
      }
      return res.json()
    })
    .then((data)=> {
      const found = data.find((p) => p.id === id)
      if (found) {
        setDetail(found)
      } else {
        throw new Error("Producto no encontrado")
      }
    })
    .catch((err) => {
      console.log(err)
    });
  },[id]);
  
  return (
    <main>
      {Object.keys(detail).length ? (
        <ItemDetail detail={detail} />
      ):(
        <p>Cargando...</p>
      )}
    </main>
  )
}
