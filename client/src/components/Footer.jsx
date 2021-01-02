import React, { Component } from "react";

import { Container, Row } from "react-bootstrap";

class Footer extends Component {
  state = {};
  render() {
    return (
      <Container fluid>
          <br/>
        <Row className="justify-content-md-center">
            <p><b>© 2020-2020: </b> by Ismael Oltra Barrasa for Ivan on Tech Bootcamp project</p>
        </Row>
      </Container>
    );
  }
}

export default Footer;
