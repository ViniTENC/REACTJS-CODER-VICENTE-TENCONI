import { Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import{Link, NavLink} from "react-router-dom";
function Header() {
return (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/"><h1>MAFAVI FC.</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{"flex-grow": "0"}}>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/categoria/Indumentaria" className="Hover">Indumentaria</Nav.Link>
                    <Nav.Link as={NavLink} to="/categoria/Accesorios" className="Hover">Accesorios</Nav.Link>
                    <Nav.Link as={NavLink} to="/categoria/Nfts" className="Hover">NFTs</Nav.Link>
                    <NavDropdown.Divider />
                    <Nav.Link as={NavLink} to="/iniciarsesion" className="Hover">Iniciar sesión</Nav.Link>
                    <Nav.Link as={NavLink} to="/carrito" className="Hover">Carrito</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}
export default Header;
