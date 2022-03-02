const Main = (props) => {
    console.log(props)

    return (
    <main className="container">
        <h2>Muchas gracias {props.nombre} {props.apellido} por sumarte a esta MafaFamilia.</h2>
        <p>Por tu edad todavia no podes irte de fiesta con nosotros ({props.edad}), pero podes comprar un montón de cosas!</p>
        <p>Si queres comprarte una indumentaria, te recomendamos la {props.productoIndumentaria}.</p>
        <p>Si queres comprarte un accesorio, busca el {props.productoAccesorio}.</p>
        <p>Pero si queres diferenciarte del resto, adquiri tu {props.productoNFT} en formato NFT.</p>
    </main>
    );
}
    export default Main;