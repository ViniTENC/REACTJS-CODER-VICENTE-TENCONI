import React from 'react'
import {useState, useEffect} from 'react'
import ItemList from './ItemList'
import { toast } from "react-toastify"
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import inventario from '../json/inventario'
const ItemListContainer = (props) => {
    const [loading, setLoading]= useState(true)
    const[productos, setProductos] = useState([])
    const {id} = useParams()
    var show = (inventario.indumentaria)
    if (id === "Accesorios"){
        var show = (inventario.accesorios)
    } 
    if(id === "Nfts"){
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
        setProductos(show)
    })
    .catch((error) => {
        toast.error("Error al cargar los productos")
    })
    .finally(()=>{
        setLoading(false)
    })
    }, [id])
    console.log(productos)
    if(loading){
        return <Loader/>
    }else{
    return (
    <>
    <h2 style={{"text-align": "center", "font-size" : "3rem"}}>{id}</h2>
    <p>{loading ? "Cargando..." : ""}</p>
    <ItemList
        productos= {productos}
    />
    </>
)
}}

export default ItemListContainer