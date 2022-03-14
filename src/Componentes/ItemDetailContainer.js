import React from 'react'
import {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
const infoProductos = ()=>[ {
  marca: "Solo Gol",
  material: "Dry-Fit",
  color: "Azul y negro",
  tipoCamiseta: "Titular",
  numero: "Sin asignar",
}]
const ItemDetailContainer = (props) => {
  const [loading, setLoading]= useState(true)
  const[informacion, setInfo] = useState([])
    useEffect(()=>{
        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
            res(infoProductos)
            },2000)
        })
    promesa
    .then(()=>{
        setInfo(infoProductos)
    })
    .catch((errorDeLaApi)=>{
        console.log(errorDeLaApi)
        //setError("Hubo un error al cargar los datos, vuelva a intentarlo")
    })
    .finally(()=>{
        setLoading(false)
    })
    })
    console.log(informacion)
  return (
    <>
    <h4>Camiseta Titular</h4>
    <p>{loading ? "Cargando..." : ""}</p>
    <ItemDetail informacion = {informacion}/>
    </>
  )
}

export default ItemDetailContainer