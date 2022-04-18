import React from 'react'
import {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import Loader from "./Loader"
import { getDocs, collection, query, where } from 'firebase/firestore'
import {db} from "../Firebase"

const ItemDetailContainer = (props) => {
  const [loading, setLoading]= useState(true)
  const { id } = useParams()
  const idNuevo = parseInt(id)
  const[producto, setProducto] = useState([])
  useEffect(()=>{
    if (id) {
        const a = query(collection(db, "Productos"),where("id", "==", idNuevo))
        
        getDocs(a)
        .then(resp=>{
            setProducto(resp.docs.map(p=>p.data()))
        })
        .catch(err=>{
            toast.error("Error al cargar los productos")
        })
        .finally(()=>{
            setLoading(false)
        })
        console.log(producto)
    }
}, [id])
    if(loading){
      return <Loader/>
    }else{
      return (
      <>
      <p>{loading ? "Cargando..." : ""}</p>
      <ItemDetail informacion={producto} id= {idNuevo}/>
      </>
      )
    }
}

export default ItemDetailContainer