import React, { Component } from 'react';
import { Container, Row, Col ,Button} from "react-bootstrap";
import {useParams} from 'react-router-dom'

class PandaDetail extends Component {

    constructor() {
        super();
        this.state = {
        };
    }

   
    render() { 
        return (  
            <Container fluid>
                <h1>Panda DETAIL -- +{this.props.match.params.id}</h1>
            </Container>
        );
    }
}
 
export default PandaDetail;
