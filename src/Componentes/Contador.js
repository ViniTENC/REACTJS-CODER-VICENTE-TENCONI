import {useState} from 'react'
const Contador = ({stock, initial, onAdd} ) =>{
    const [contador,setContador] =useState(initial)
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

    return(
        <div>
            <h1>Contador</h1>
            <p>Mi contador Actual va : {contador}</p>
            <button onClick={handleAumentar}>+</button>
            <button onClick={handleDisminuir}>-</button>
            <button onClick={handleConfirmar}>confrimar</button>
        </div>
    )
}
export default Contador