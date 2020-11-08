import React, { Component } from "react";

import { Container, Row, Col, Form } from "react-bootstrap";

import {epochToUTCDate ,getPanda} from "../assets/js/utils";

class BreedRoom extends Component {
  state = {};
  render() {
    return (
      <Container fluid>
        <Row className="justify-content-md-center body-title">
          <div align="center">
            <h1 className="c-black">Breeding Room</h1>
            <p className="c-black">Please give the pandas some privacy</p>
            <br />
            <h4 id="panda-created-message"> </h4>
          </div>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                <Form.Label>Mum</Form.Label>
                <Form.Control as="select" size="sm" custom>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                <Form.Label>Dad</Form.Label>
                <Form.Control as="select" size="sm" custom>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BreedRoom;
