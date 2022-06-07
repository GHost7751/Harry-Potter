import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
            <Navbar bg="dark" variant="dark">
                <Container>
                <Link to='/home'> <Navbar.Brand href="#">Harry Potter Characters</Navbar.Brand></Link>
                <Nav className="me-left">
                 <Link to="/home"><Nav.Link href="#home">Home</Nav.Link></Link>
                  <br />
                 <Link to="/characters"><Nav.Link href="#characters">Characters</Nav.Link></Link>
                </Nav>
                </Container>
            </Navbar>
    );
};

export default Header;