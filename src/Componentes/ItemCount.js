import React from 'react'
import  Button  from 'react-bootstrap/Button'
import { useState } from "react"
import onAdd from '../App'
const ItemCount = (props) => {
    console.log(props)
    const [contador, setContador] = useState(props.initial)
    const sumar=()=>{
        if (contador< props.stock) {
            setContador(contador + 1)
        }
    }
    const restar = () =>{
        if (contador> props.initial) {
            setContador(contador - 1)
        }
    }
    const onAdd = () => {
        console.log("Se sumaron al carrito "+ contador + " productos")
        setContador("Agregado!")
    }
    console.log(props.stock)
    console.log(props.initial)
    console.log(contador)
    return (
    <>
    <div className="Cantidades">
        <div className="mb-2">
            <Button variant="primary" size="lg" onClick={sumar}>
                    +
            </Button>
        </div>
        <p>{contador}</p>
        <div className="mb-2">
            <Button variant="primary" size="lg" onClick={restar}>
                -
            </Button>
        </div>
    </div>
    <div className="mb-2">
    <Button variant="primary" size="lg" onClick={onAdd}>
        Confirmar
    </Button>
    </div>
    </>
)
}

export default ItemCount