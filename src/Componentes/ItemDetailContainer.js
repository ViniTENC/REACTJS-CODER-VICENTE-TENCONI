import React from 'react'
import {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import Loader from "./Loader"
import inventario from '../json/inventario'
const ItemDetailContainer = (props) => {
  const [loading, setLoading]= useState(true)
  const[informacion, setInfo] = useState({})
  const { id } = useParams()
  const idNuevo = parseInt(id)
  console.dir(idNuevo)
  var show = (inventario.indumentaria)
  if ((idNuevo === 4)|| (idNuevo === 5) || (idNuevo ===6)){
    var show = (inventario.accesorios)
  } 
  if(idNuevo === 7){
    var show = (inventario.nfts)
  }
    useEffect(()=>{
    const pedido = new Promise((res,rej)=>{
            setTimeout(()=>{
            res(inventario)
            },3000)
    })
    pedido
    .then((respuesta) => {
        setInfo(show)
    })
      .catch((errorDeLaApi)=>{
        toast.error("Hubo un error!")
          //setError("Hubo un error al cargar los datos, vuelva a intentarlo")
      })
      .finally(()=>{
          setLoading(false)
      })
    })
    if(loading){
      return <Loader/>
    }else{
      return (
      <>
      <p>{loading ? "Cargando..." : ""}</p>
      <ItemDetail informacion = {informacion} id= {idNuevo}/>
      </>
      )
  }
}

export default ItemDetailContainer