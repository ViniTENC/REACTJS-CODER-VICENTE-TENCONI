import React from 'react'
import { useContext } from 'react'
import { contexto } from './CartContext'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import {db} from "../Firebase"
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import Button from '@mui/material/Button';
const Carrito = () => {
  const {carrito, borrarProducto, total} = useContext(contexto)
  const handleClick = () => {
    const orden = {
      buyer : {
        nombre: "",
        telefono: "",
        email: ""
      },
      items: carrito,
      date: serverTimestamp(),
      total: total, 
    }
    const ordenesMafaveras = collection(db, "ordenes")
    const pedido = addDoc(ordenesMafaveras, orden)
  }
  console.log(carrito)
  return (
    <>
            <h2>Carrito</h2>
            <div className="row" style={{"margin-top": "1rem"}}>
            {
                carrito.map(producto => (
                  <div className='carritoContainer'>
                    <div className='divImgCarrito'>
                      <img className='imgCarrito' src={producto.image} alt=''></img>
                    </div>
                    <div className='carritoContainerTexto'>
                      <h3>{producto.nombre}</h3>
                      <p>$ {producto.precio}</p>                        
                      <p>Cantidad: {producto.cantidad}</p>
                        <IconButton aria-label="delete" size="large" color="error" onClick={()=>borrarProducto(producto.id)}>
                          <DeleteIcon />
                        </IconButton>
                    </div>
                </div>
                ))
            }
            </div>
            <div className="btnBuy">
              <p>Total : ${total}</p>
              <Button variant="contained" color="success" onClick={handleClick}>
                Finalizar Compra
              </Button>
            </div>
    </>
  )
}

export default Carrito