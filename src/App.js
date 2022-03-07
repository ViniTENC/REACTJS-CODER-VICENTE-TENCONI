import Header from "./Componentes/Header"
import Footer from "./Componentes/Footer"
import Main from "./Componentes/Main"
function App() {
    return (
        <>
            <Header/>
            <Main
                stock = {5}
                initial = {2}
            />
            <Footer/>
        </>
    )
}

export default App