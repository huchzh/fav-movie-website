import { Link } from 'react-router-dom'

//Bootstrap
import { Navbar as BS_Navbar, Nav} from 'react-bootstrap';

const Navbar = () => {
    return (
        <BS_Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <BS_Navbar.Brand>Favorite Movies</BS_Navbar.Brand>
            <BS_Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <BS_Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">
                        <i class="fas fa-home"></i>
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/list">
                        <i class="fas fa-list"></i>
                        List
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to="/signin">
                        <i class="fas fa-sign-in-alt"></i>
                        Sign In
                    </Nav.Link>
                </Nav>
            </BS_Navbar.Collapse>
        </BS_Navbar>
    )
}

export default Navbar
