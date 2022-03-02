import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
function App() {
    const edad= 17
    const productoIndumentaria = ["Camiseta titular"]
    const productoAccesorio = ["Vasavi"]
    const productoNFT = ["TuEscudavi"]
    return (
        <>
            <Header/>
            <Main
                nombre="Vicente"
                apellido="Tenconi"
                edad={edad}
                productoIndumentaria={productoIndumentaria}
                productoAccesorio={productoAccesorio}
                productoNFT={productoNFT}
            />
            <Footer/>
        </>
    )
}

export default App