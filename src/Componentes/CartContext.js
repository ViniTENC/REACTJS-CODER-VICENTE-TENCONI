import {createContext, useState} from "react";
export const contexto = createContext()
const {Provider} = contexto

const MiProvider = ({children}) =>{
  const [carrito,setCarrito] = useState([])
  const [total,setTotal] = useState(0)
  const [cantidadActual,setCantidadActual] = useState(0)
    const agregarProducto = (info, cantidad) =>{
      console.log(info.precio)
      setCarrito([...carrito,{...info,cantidad}])
      setTotal(total + info.precio * cantidad)
      setCantidadActual(cantidadActual + cantidad)
      console.log("Funciona")
      console.log(carrito)
      
    }
    const borrarProducto = id =>{
        console.log("Borrando desde el Carrito", id)
        console.log(id)
    }
    const valorDelProvider = {
        carrito,
        agregarProducto,
        borrarProducto 
    }
    return(
        <Provider value={valorDelProvider}>
            {children}            
        </Provider>
    )
}
export default MiProvider