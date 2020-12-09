import React, { Component } from 'react';
import {Navbar,Nav,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import "../assets/css/header.css";

class  Header extends Component {
    state = {  }
    render() { 
        return ( 
            <Navbar bg="light" expand="lg"  sticky="top"  >
                <Navbar.Brand id="nav-bar-title"><Link to="" className= "nav-link">Crypto Panda</Link></Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="factory" className= "nav-link">Panda Factory</Link>
                        <Link to="gallery" className= "nav-link">My Collection</Link>
                        <Link to="breed" className= "nav-link">Breed Room</Link>
                        <Link to="market" className= "nav-link">Market Place</Link>
                    </Nav>
                    <Button variant="danger">Start</Button>
                </Navbar.Collapse>
                
            </Navbar>
         );
    }
}
 
export default Header;