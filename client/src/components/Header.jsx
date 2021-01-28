import React, { Component } from 'react';
import {Navbar,Nav,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import "../assets/css/header.css";



class  Header extends Component {
    constructor() {
        super();
        this.state = {
            contractOwner:0
        }
    }


    async componentDidMount(){
        let _contractOwner;
        
       _contractOwner = await this.props.contract.methods.contractOwner().call({from: this.props.accounts[0]});
       
       this.setState(() => ({
        contractOwner: _contractOwner
      }));
    }

    render() { 
        return ( 
            <Navbar bg="light" expand="lg"  sticky="top"  >
                <Navbar.Brand id="nav-bar-title"><Link to="" className= "nav-link">Crypto Panda</Link></Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {this.state.contractOwner != this.props.accounts[0] ? ""
                            :<Link to="/factory" className= "nav-link">Panda Factory</Link>
                        } 
                        <Link to="/gallery" className= "nav-link">My Collection</Link>
                        <Link to="/breed" className= "nav-link">Breed Room</Link>
                        <Link to="/market" className= "nav-link">Market Place</Link>
                    </Nav>
                </Navbar.Collapse>
                
            </Navbar>
         );
    }
}
 
export default Header;