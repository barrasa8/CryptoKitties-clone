import React, { Component } from 'react';
import { Container, Row} from "react-bootstrap";

class Home extends Component {
    state = {  }
    render() { 
        return (  
            <Container fluid>
                <Row className="justify-content-md-center">
                    <h1>This is HOME</h1>
                </Row>
            </Container>
        );
    }
}
 
export default Home;