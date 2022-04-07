import React from 'react'
import { useState, useContext } from 'react'
import ItemCount from './ItemCount'
import {contexto} from './CartContext'
import { Link } from 'react-router-dom'
const ItemDetail = ({informacion, id, }) => {
  //const [agregarAlCarrito, carrito ] = useContext(MiProvider)
  const [seleccionado, setSeleccionado] = useState(false)
  const {agregarProducto} = useContext(contexto)
  const onAdd = (unidadSeleccionada) => {
    if(unidadSeleccionada !== undefined){
      setSeleccionado(unidadSeleccionada)
    }}
    var difficult_tasks  = informacion.filter((task) => task.id === id);
    const handleClick = () =>{
      console.log("Click")
      difficult_tasks.map((info)=>
      agregarProducto(info, seleccionado)
      )
      
    }
    if (seleccionado === false ) {
      return (
        <div className="container containerProducto">
        {difficult_tasks.map((info)=>{
                    return ( <>
                      <h3>{info.nombre}</h3>
                      <img src={info.image} alt=""></img>
                      <h4>${info.precio}</h4>
                      <ul>
                        <li>Marca: {info.marca}</li>
                        <li>Material: {info.material}</li>
                        <li>Colores: {info.color}</li>
                        <li>Género: {info.genero}</li>
                        <li>Numero: {info.numero}</li>
                      </ul></>
                    )
                })}
        
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            <p>{seleccionado?"Se seleccionaron los productos" :"No se eligió ninguna cantidad"}</p>
        </div>
      )
  } else {
      return(
        <>
        <div className="container containerProducto">
        {difficult_tasks.map((info)=>{
                    return ( <>
                      <h3>{info.nombre}</h3>
                      <img src={info.image} alt=""></img>
                      <h4>${info.precio}</h4>
                      <ul>
                        <li>Marca: {info.marca}</li>
                        <li>Material: {info.material}</li>
                        <li>Colores: {info.color}</li>
                        <li>Género: {info.genero}</li>
                        <li>Numero: {info.numero}</li>
                      </ul></>
                    )
                })}
        <p>Se sumaron los productos al carrito!</p>
        <Link onClick={handleClick} to="/carrito">carrito</Link>
        </div>
        </>
      )
    }
}
export default ItemDetail