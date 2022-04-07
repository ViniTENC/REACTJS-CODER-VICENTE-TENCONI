import React, { createContext, useContext } from 'react'
import ItemCount from './ItemCount.js'
import {Link} from "react-router-dom"
import MiProvider from './CartContext.js'
const Item = ({producto}) => {
  return (
    <>    
        <article className='prods track'>
            <div className='camisetaT'><img className='imgR track__img' src={producto.image} alt=''></img></div>
            <div className='track__texto'>
              <h3>{producto.nombre}</h3>
              <p>$ {producto.precio}</p>
              <button className='link'>
              <Link to={`/producto/${producto.id}`}>Ver más</Link>
              </button>
            </div>
        </article>
    </>
  )
}

export default Item
