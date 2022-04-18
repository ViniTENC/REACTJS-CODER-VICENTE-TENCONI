import React from 'react'
import {useState, useEffect} from 'react'
import ItemList from './ItemList'
import { toast } from "react-toastify"
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import {db} from "../Firebase"
import { getDocs, collection, query, where } from 'firebase/firestore'
const ItemListContainer = (props) => {
    const [loading, setLoading]= useState(true)
    const[productos, setProductos] = useState([])
    const {id} = useParams()
    useEffect(()=>{
        if (id) {
            const q = query(collection(db, "Productos"),where("categoria", "==", id))
            getDocs(q)
            .then(resp=>{
                setProductos(resp.docs.map(p=>p.data()))
            })
            .catch(err=>{
                toast.error("Error al cargar los productos")
            })
            .finally(()=>{
                setLoading(false)
            })
        }
    }, [id])
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