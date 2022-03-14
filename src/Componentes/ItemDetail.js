import React from 'react'

const ItemDetail = (props) => {
  return (
    <div className="container mainContainer">
    <ul>
      {props.informacion.map((info, detalle) =>{
        return(
          <>
          <li>Marca: {info.marca}</li>
          <li>Material: {info.material}</li>
          <li>Colores: {info.color}</li>
          <li>Equipación: {info.tipoCamiseta}</li>
          <li>Numero: {info.numero}</li>
        </>
        )
      }
      )}
    </ul>
    </div>
  )
}

export default ItemDetail