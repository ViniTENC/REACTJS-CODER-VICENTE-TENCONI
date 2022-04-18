import React from 'react'
import { useState, useContext } from 'react'
import ItemCount from './ItemCount'
import {contexto} from './CartContext'
import { Link, useNavigate, Route } from 'react-router-dom'
import {Redirect} from 'react-router'
import Carrito from './Carrito'
const ItemDetail = ({informacion, id, }) => {
  //const [agregarAlCarrito, carrito ] = useContext(MiProvider)
  const [seleccionado, setSeleccionado] = useState(false)
  const {agregarProducto} = useContext(contexto)
  const navigate = useNavigate()
  const onAdd = (unidadSeleccionada) => {
      if(unidadSeleccionada !== undefined){
      setSeleccionado(unidadSeleccionada)
      }
  }
  var inventario  = informacion.filter((task) => task.id === id);
  const handleClick = () =>{
    inventario.map((info)=>
    agregarProducto(info, seleccionado)
    )
    return navigate('/carrito')
  }
    if(id=== 7){
        return(
        <div className="container" id='containerProducto'>
          {inventario.map((info)=>{
            console.log(info)
          return(
          <>
            <h3>{info.nombre}</h3>
            <div className='imgR'><img src={info.image} alt=""></img></div>
            <h4>{info.estadoProducto}</h4>
            </>
            )
        })}
        </div>
        )
      }
    return (
        <div className="container" id='containerProducto'>
        {inventario.map((info)=>{
                    return ( <>
                      <h3>{info.nombre}</h3>
                      <div className='imgR'><img src={info.image} alt=""></img></div>
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
        {seleccionado? handleClick() :<ItemCount initial={1} stock={5} onAdd={onAdd} handleClick={handleClick}/>}
        </div>
      )
}
export default ItemDetail