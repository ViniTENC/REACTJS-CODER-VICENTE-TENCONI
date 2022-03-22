import React from 'react'
import { useState } from 'react'
import ItemCount from './ItemCount'
const ItemDetail = ({informacion, id}) => {
  const [seleccionado, setSeleccionado] = useState(false)
  const onAdd = (unidadSeleccionada) => {
    console.log("On Add desde el ItemDetailContainer")
    console.log(unidadSeleccionada)
    if(unidadSeleccionada !== undefined){
      setSeleccionado(unidadSeleccionada)
    }}
    var difficult_tasks = informacion.filter((task) => task.id === id);
    console.log(seleccionado)
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
        </div>
        </>
      )
    }
}
export default ItemDetail