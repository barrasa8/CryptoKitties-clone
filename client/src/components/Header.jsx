import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown,Button,Form,FormControl} from "react-bootstrap";

class  Header extends Component {
    state = {  }
    render() { 
        return ( 
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">CryptoPanda</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#pandaFactory">Panda Factory</Nav.Link>
                    <Nav.Link href="#myCollection">My Collection</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
         );
    }
}
 
export default Header;