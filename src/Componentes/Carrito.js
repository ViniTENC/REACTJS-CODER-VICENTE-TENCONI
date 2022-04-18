import React from 'react'
import { useContext } from 'react'
import { contexto } from './CartContext'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import {db} from "../Firebase"
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import Button from '@mui/material/Button';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Link, useNavigate } from 'react-router-dom'
const Carrito = () => {
  const {carrito, borrarProducto, total, checkout} = useContext(contexto)
  const navigate = useNavigate()
  const handleClick = () => {
    const orden = {
      buyer : {
        nombre: "Vicente",
        telefono: "1145768112",
        email: "tenconivini@gmail.com"
      },
      items: carrito,
      date: serverTimestamp(),
      total: total, 
    }
    const ordenesMafaveras = collection(db, "ordenes")
    const pedido = addDoc(ordenesMafaveras, orden)
    pedido
    .then(res=>{
        console.log(res.id)
    })
    Report.success (
        'Compra realizada',
        orden.buyer.nombre + ', ya te guardamos los productos, solo falta que abones tu pedido. Toda la información de pago fue enviada a tu correo: '+ orden.buyer.email + ', y a tu número de teléfono: ' + orden.buyer.telefono+'.',
        'Seguir comprando',
        () => {
            navigate('/')
        }
    )
    checkout()
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