import React from 'react'
import  Button  from 'react-bootstrap/Button'
import { useState } from "react"
const ItemCount = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState(initial)
    const handleAumentar= () =>{
        if (contador<stock) {
            setContador(contador + 1)
        }
    }
    const handleDisminuir= () =>{
        if (contador > initial) {
            setContador(contador - 1)
        }
    }
    const handleConfirmar= (e) =>{
        console.log(e)
        onAdd(contador)
    }
    return (
    <div className='contador'>
    <div className="Cantidades">
        <div className="mb-2">
            <Button variant="primary" size="lg" onClick={handleAumentar}>
                    +
            </Button>
        </div>
        <p>{contador}</p>
        <div className="mb-2">
            <Button variant="primary" size="lg" onClick={handleDisminuir}>
                -
            </Button>
        </div>
    </div>
    <div className="mb-2">
    <Button variant="primary" size="lg" onClick={handleConfirmar}>
        Confirmar
    </Button>
    </div>
    </div>
)
}

export default ItemCount