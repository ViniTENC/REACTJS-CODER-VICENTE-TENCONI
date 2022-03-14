import React from 'react'
import ItemCount from './ItemCount.js'
const Item = (props) => {
  return (
    <>    
        <div className='prods'>
            <div className='container imgContainer'><img className= "imgR" src="./camisetaS.jpg" alt=""></img></div>
            <h3>{props.productoN}</h3>
            <p>$ {props.productoP}</p>
        </div>
    </>
  )
}

export default Item