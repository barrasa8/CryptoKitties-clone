import React, { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import "../assets/css/header.css";

class  Header extends Component {
    state = {  }
    render() { 
        return ( 
            <Navbar bg="light" expand="lg">
                <Navbar.Brand id="nav-bar-title"><Link to="" className= "nav-link">Crypto Panda</Link></Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="factory" className= "nav-link">Panda Factory</Link>
                        <Link to="gallery" className= "nav-link">My Collection</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
         );
    }
}
 
export default Header;