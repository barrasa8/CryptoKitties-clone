import React, { Component } from "react";

import { Container, Row, Col, Form } from "react-bootstrap";

import {epochToUTCDate ,getPanda} from "../assets/js/utils";

class BreedRoom extends Component {

  constructor() {
    super();
    this.state = {
      pandaList: [],
    };
  }

  async componentDidMount() {
    let _pandaList = await getPanda(this.props.contract, this.props.accounts);

    this.setState(() => ({
          pandaList: _pandaList
        }));
  }
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
        <Row className="justify-content-md-center">
          <Col md={{span:3}}>
            <Form>
              <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                <Form.Label>Select Panda Mum</Form.Label>
                <Form.Control as="select" size="sm" custom>
                  {this.state.pandaList.map((panda) => (
                    <option key={"mum-" + panda.pandaTokenId.toString()}>{panda.pandaTokenId.toString()+" | DNA: " +panda.genes.toString()}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form>
          </Col>
          <Col md={{span:3}}>
            <Form>
              <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                <Form.Label>Select Panda Dad</Form.Label>
                <Form.Control as="select" size="sm" custom>
                  {this.state.pandaList.map((panda) => (
                      <option key={"dad-" + panda.pandaTokenId.toString()}>{panda.pandaTokenId.toString()+" | DNA: " +panda.genes.toString()}</option>
                    ))}
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
