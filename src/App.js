import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"


function App() {
    const edad= 17
    const usuarios = ["Tomas", "Facundo", "Juan"]
    return (
        <>
            <Header/>
            <Main
                nombre="Vicente"
                apellido="Tenconi"
                edad={edad}
                usuarios={usuarios}
            />
            <Footer/>
        </>
    )
}

export default App