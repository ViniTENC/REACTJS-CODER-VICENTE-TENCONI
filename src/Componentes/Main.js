import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Carrito from "./Carrito";
import Carrussel from "./Carrussel";
const Main = (props) => {
    return (
    <main className="container">
        <Routes>
            <Route path="/" element={<Carrussel/>}></Route>
            <Route path="/categoria/:id" element={<ItemListContainer/>}></Route>
            <Route path="/producto/:id" element={<ItemDetailContainer/>}></Route>
            <Route path="/iniciarsesion" element={<ItemListContainer/>}></Route>
        </Routes>
    </main>
    );
}
export default Main;