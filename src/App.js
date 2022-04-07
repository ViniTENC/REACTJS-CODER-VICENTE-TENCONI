import Header from "./Componentes/Header"
import Footer from "./Componentes/Footer"
import Main from "./Componentes/Main"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";
import { createContext } from "react";
import MiProvider from "./Componentes/CartContext";
function App() {
    return (
        <MiProvider>
            <BrowserRouter>
                <Header/>
                <Main
                    stock = {5}
                    initial = {2}
                />
                <Footer/>
                <ToastContainer/>
            </BrowserRouter>
        </MiProvider>
    )

}

export default App