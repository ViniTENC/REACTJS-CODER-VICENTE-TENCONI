import React from 'react'
import {useState, useEffect} from 'react'
import ItemList from './ItemList'
const productosIniciales = ()=> [
    {
        id: 1,
        nombre: "Camiseta Titular",
        precio : 100,
    },
    {
        id: 2,
        nombre: "Camiseta Suplente",
        precio : 100,
    },
    {
        id: 3,
        nombre: "Rompevientos",
        precio : 50,
    }
]
const ItemListContainer = (props) => {
    const [loading, setLoading]= useState(true)
    const[productos, setProductos] = useState([])
    useEffect(()=>{
        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
            res(productosIniciales)
            },2000)
        })
    promesa
    .then(()=>{
        setProductos(productosIniciales)
    })
    .catch((errorDeLaApi)=>{
        console.log(errorDeLaApi)
        //setError("Hubo un error al cargar los datos, vuelva a intentarlo")
    })
    .finally(()=>{
        setLoading(false)
    })
    })
    console.log(productos)
return (
    <>
    <h2>Indumentaria</h2>
    <p>{loading ? "Cargando..." : ""}</p>
    <ItemList
        productos= {productos}
    />
    </>
)
}

export default ItemListContainer