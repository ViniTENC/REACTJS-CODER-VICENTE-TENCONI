import CamisetaT from './CamisetaT'
import CamisetaS from './CamisetaS'
import Rompevientos from "./Rompevientos"
import ItemCount from "./ItemCount"
const Main = (props) => {
    return (
    <main className="container">
        <h2>Indumentaria</h2>
        <div className="container mainContainer">
            <div className="prods">
                <CamisetaT/>
                <h3>Camiseta titular</h3>
                <ItemCount stock={8} initial={1}></ItemCount>
            </div>
            <div className="prods">
                <CamisetaS/>
                <h3>Camiseta suplente</h3>
                <ItemCount stock={5} initial={1}></ItemCount>
            </div>
            <div className="prods">
                <Rompevientos/>
                <h3>Rompevientos</h3>
                <ItemCount stock={3} initial={1}></ItemCount>
            </div>
        </div>
    </main>
    );
}
    export default Main;