import { Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

function Header() {
return (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home"><h1>MAFAVI FC.</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{"flex-grow": "0"}}>
                <Nav className="me-auto">
                <Nav.Link href="#Indumentaria">Indumentaria</Nav.Link>
                <Nav.Link href="#Accesorios">Accesorios</Nav.Link>
                <Nav.Link href="#NFTS">NFTs</Nav.Link>
                <NavDropdown title="Eventos" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">MafaPartidos</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">MafAsados</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">MafaFiestas</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Divider />
                <Nav.Link href="#action/3.4">Iniciar sesión</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
    </Navbar>
);
}
export default Header;
