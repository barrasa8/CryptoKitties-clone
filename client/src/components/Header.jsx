import React, { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class  Header extends Component {
    state = {  }
    render() { 
        return ( 
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">CryptoPanda</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="" className= "nav-link">Home</Link>
                        <Link to="factory" className= "nav-link">Panda Factory</Link>
                        <Link to="gallery" className= "nav-link">My Collection</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
         );
    }
}
 
export default Header;