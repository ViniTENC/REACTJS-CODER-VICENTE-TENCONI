import React from 'react'
import Item from './Item'
const ItemList = ({productos}) => {
    return (
        <div className="container mainContainer">
            {productos.map((producto)=>{
                return (
                <Item producto= {producto} key={producto.id}
                />
                )
            })}
        </div>
    )
}

export default ItemList