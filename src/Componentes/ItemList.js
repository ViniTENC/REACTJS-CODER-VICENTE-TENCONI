import React from 'react'
import Item from './Item'
const ItemList = (props) => {
    return (
        <div className="container mainContainer">
            {props.productos.map((producto,indice)=>{
                return (
                <Item productoP= {producto.precio} productoN={producto.nombre} productoI={producto.imagen}
                />
                )
            })}
        </div>
    )
}

export default ItemList