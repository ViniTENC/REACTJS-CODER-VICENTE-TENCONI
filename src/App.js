import Header from "./Componentes/Header"
import Footer from "./Componentes/Footer"
import Main from "./Componentes/Main"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Main
                stock = {5}
                initial = {2}
            />
            <Footer/>
            <ToastContainer/>
        </BrowserRouter>
    )

}

export default App