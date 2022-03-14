import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
const Main = (props) => {
    return (
    <main className="container">
        <Routes>
            <Route path="/" element={<ItemListContainer/>}></Route>
            <Route path="/" element={<ItemListContainer/>}></Route>
            <Route path="" element={<ItemListContainer/>}></Route>
            <Route path="" element={<ItemListContainer/>}></Route>
        </Routes>
        <ItemDetailContainer/>
    </main>
    );
}
export default Main;