import React from 'react'
import Item from './Item'
const ItemList = ({productos}) => {
    return (
        <div className="container mainContainer">
            {productos.map((producto)=>{
                console.log(producto)
                return (
                <Item producto= {producto} key={producto.id}
                />
                )
            })}
        </div>
    )
}

export default ItemList