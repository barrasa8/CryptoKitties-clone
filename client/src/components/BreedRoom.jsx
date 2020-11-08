import React, { Component } from "react";

import { Container, Row, Col, Form } from "react-bootstrap";

import {epochToUTCDate ,getPanda} from "../assets/js/utils";
import PandaCard from "./PandaCard";

import "../assets/css/breedRoom.css";

class BreedRoom extends Component {

  constructor() {
    super();
    this.state = {
      pandaList: [],
      MumPanda: {
        pandaTokenId:1,
        genes:9535304831437132,
        birthTime:1604830614,
        mumId:0,
        dadId:0,
        generation:0,
        dna:{
          dnaarmleg: 51,
          dnaeyepatch: 53,
          dnainnerearfoot: 54,
          dnaheadbody: 10,
          //Pandatributes
          dnaeyeshape: 1,
          dnamouthshape: 1,
          decorationMidcolor: 19,
          decorationSidescolor: 10,
          animation: 1,
          lastNum: 9
        }
      },
      DadPanda: {
        pandaTokenId:1,
        genes:9535304831437132,
        birthTime:1604830614,
        mumId:0,
        dadId:0,
        generation:0,
        dna:{
          dnaarmleg: 51,
          dnaeyepatch: 53,
          dnainnerearfoot: 54,
          dnaheadbody: 10,
          //Pandatributes
          dnaeyeshape: 1,
          dnamouthshape: 1,
          decorationMidcolor: 19,
          decorationSidescolor: 10,
          animation: 1,
          lastNum: 9
        }
      },
    };
  }

  async componentDidMount() {
    let _pandaList = await getPanda(this.props.contract, this.props.accounts);
console.log(_pandaList[0]);
    this.setState(() => ({
          pandaList: _pandaList,
          MumPanda: _pandaList[0],
          DadPanda: _pandaList[0]
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
          <Col md={{span:5}}>
            <Form>
              <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                <Form.Label>Select Panda Mum</Form.Label>
                <Form.Control as="select" size="sm" custom>
                  {this.state.pandaList.map((panda) => (
                    <option key={"mum-" + panda.pandaTokenId.toString()} value={panda.dna}>{panda.pandaTokenId.toString()+" | DNA: " +panda.genes.toString()}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form>
            <PandaCard
              key={"panda-card-mum" + this.state.MumPanda.genes.toString()}
              dna={this.state.MumPanda.dna}
              mumId={this.state.MumPanda.mumId}
              dadId={this.state.MumPanda.dadId}
              generation={this.state.MumPanda.generation}
              birthTime={epochToUTCDate(this.state.MumPanda.birthTime)}
            />
          </Col>
          <Col md={{span:1}}></Col>
          <Col md={{span:5}}>
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
            <PandaCard
              key={"panda-card-mum" + this.state.DadPanda.genes.toString()}
              dna={this.state.DadPanda.dna}
              mumId={this.state.DadPanda.mumId}
              dadId={this.state.DadPanda.dadId}
              generation={this.state.DadPanda.generation}
              birthTime={epochToUTCDate(this.state.DadPanda.birthTime)}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BreedRoom;
