import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './nav.styles.css';
import Button from 'react-bootstrap/Button';

export const NavComponent = ({ deleteConfirmation }) => (
<Navbar expand="lg" className="bg-body-tertiary">
    <Container>
        <Navbar.Brand href="#">Marvelous 2.0</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar>
            <Nav className="me-auto justify-content-end">
                <Button onClick={deleteConfirmation}>Delete All Tasks</Button>
            </Nav>
        </Navbar>
    </Container>
</Navbar>
);