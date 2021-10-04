import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">DreamTeam App</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Contactos">Contactos</Nav.Link>
                    <Nav.Link href="/Salir">Salir</Nav.Link>
                    <Nav.Link href="/Mis_servicios">Mis Servicios</Nav.Link>
                    <Nav.Link href="/Mis_contratos">Mis Contratos</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;