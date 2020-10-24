import React, { Component } from 'react';

import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import PandaCard from './PandaCard';

class PandaGallery extends Component {
    constructor() {
        super();
        this.state = {
          dna: {
            dnaarmleg: 51,
            dnaeyepatch: 53,
            dnainnerearfoot: 54,
            dnaheadbody: 10,
            //Pandatributes
            dnaeyeshape: 1,
            dnamouthshape: 1,
            decorationMidcolor: 19,
            decorationSidescolor: 8,
            animation: 1,
            lastNum: 9,
          }
        };
      }

    render() { 
        return ( 
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col><PandaCard dna={this.state.dna}></PandaCard></Col>
                    <Col><PandaCard dna={this.state.dna}></PandaCard></Col>
                    <Col><PandaCard dna={this.state.dna}></PandaCard></Col>
                </Row>
            </Container>
        
         );
    }
}
 
export default PandaGallery;