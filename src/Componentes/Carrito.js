import React from 'react'
import { useContext } from 'react'
import { contexto } from './CartContext'
const Carrito = () => {
  const {carrito, borrarProducto} = useContext(contexto)
  return (
    <>
            <h2>Carrito</h2>
            {
                carrito.map(producto => (
                    <div key={producto.id}>
                        <p>{producto.nombre}</p>
                        <p>{producto.precio} x {producto.cantidad}</p>
                        <button onClick={()=>borrarProducto(producto.id)}>Borrar</button>
                    </div>
                ))
            }
    </>
  )
}

export default Carrito