import Carrito from "./Carrito"

const carrito={
    link: "./imagenesDelProyecto/carrito.png",
  }
function CartWidget(){
    return(
        <div class="carritoCompras">
            <img src={carrito.link} alt=""></img>
        </div>
    )
}
export default CartWidget