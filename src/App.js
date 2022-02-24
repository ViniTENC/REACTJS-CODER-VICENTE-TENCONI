import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
function App () {
    return (
    <>
        <Header/>
        <Main nombre="Vicente" apellido="Tenconi" edad={17}>
            <p>Hola Mundo</p>
            <p>Hola Mundo 2</p>
        </Main>
        <Footer/>
    </>
    )
}
export default App