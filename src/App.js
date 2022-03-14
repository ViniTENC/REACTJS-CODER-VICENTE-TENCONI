import Header from "./Componentes/Header"
import Footer from "./Componentes/Footer"
import Main from "./Componentes/Main"
import {BrowserRouter} from "react-router-dom"
function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Main
                stock = {5}
                initial = {2}
            />
            <Footer/>
        </BrowserRouter>
    )
}

export default App