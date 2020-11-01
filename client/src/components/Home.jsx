import React, { Component } from 'react';
import { Container, Row} from 'react-bootstrap';

import PandaGalleryImage from '../assets/img/PandaGallery.jpg'

import "../assets/css/home.css";

class Home extends Component {
    state = {  }
    render() { 
        return (  
            <Container fluid >
                <br/>
                <br/>
                <Row className="justify-content-md-center">
                    <h1 className="home-text">Collect , breed and trade Crypto Panda collectables</h1>
                </Row>
                <Row className="justify-content-md-center">
                    <img className="gradient-border" id="home-img" src={PandaGalleryImage} alt=""/>
                </Row>
            </Container>
        );
    }
}
 
export default Home;