import {createContext, useState} from "react";
export const contexto = createContext()
const {Provider} = contexto

const MiProvider = ({children}) =>{
    const [carrito,setCarrito] = useState([])
    const [total,setTotal] = useState(0)
    const [cantidadActual,setCantidadActual] = useState(0)
    const agregarProducto = (info, cantidad) =>{
        if (isInCart(info)){
            const index = carrito.findIndex(producto => producto.id === info.id)
            const nuevoCarrito = [...carrito]
            nuevoCarrito[index].cantidad += cantidad
            setCarrito(nuevoCarrito)
            setTotal(total + info.precio * cantidad)
            setCantidadActual(cantidadActual + cantidad)
        }else {
            setCarrito([...carrito,{...info,cantidad}])
            setTotal(total + info.precio * cantidad)
            setCantidadActual(cantidadActual + cantidad)
        }
    }
    const borrarProducto = id =>{
        const productoBorrado = carrito.find(producto => producto.id === id)
        const nuevoCarrito = carrito.filter(producto => producto.id !== id)
        setCarrito(nuevoCarrito)
        setTotal(total - productoBorrado.precio * productoBorrado.cantidad)
        setCantidadActual(cantidadActual - productoBorrado.cantidad)
    }
    const isInCart = (info) =>{
        return carrito && carrito.some(producto => producto.id === info.id)
    }
    const checkout = () =>{
        setCarrito([])
        setTotal(0)
        setCantidadActual(0)
    }
    const valorDelProvider = {
        carrito,
        agregarProducto,
        borrarProducto,
        total,
        checkout
    }
    return(
        <Provider value={valorDelProvider}>
            {children}            
        </Provider>
    )
}
export default MiProvider