const carrito={
    link: "./imagenesDelProyecto/carrito.png",
}
function CartWidget(){
    return(
        <div className="carritoCompras">
            <img src={carrito.link} alt=""></img>
        </div>
    )
}
export default CartWidget