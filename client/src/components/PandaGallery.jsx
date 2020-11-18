import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import PandaCard from "./PandaCard";

import {epochToUTCDate ,getPanda} from "../assets/js/utils";

import "../assets/css/PandaGallery.css"

class PandaGallery extends Component {
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

  componentDidUpdate(){
    console.log("pandaGAllery will update");
  }

  render() {
    return (
      <Container fluid>
        <Row className="justify-content-md-center body-title">
                    <h1>My Collection</h1>
        </Row>
        {this.props.birthEvent.generation > 0 ? 
        <Row className="justify-content-md-center">
          <h5 id="panda-created-message">
            {this.props.birthEvent.genes > 0
              ? "Your Panda is Alive: Owner:" +
              this.props.birthEvent.owner +
              ", PandaID:" +
              this.props.birthEvent.PandaId +
              " , Genes:" +
              this.props.birthEvent.genes +
              " , DadId:" +
              this.props.birthEvent.dadId +
              " , MumId:" +
              this.props.birthEvent.mumId +
              " , Generation:" +
              this.props.birthEvent.generation
              : ""}
          </h5>
        </Row>
        : ""}
        <Row className="justify-content-md-center">
          {this.state.pandaList.map((panda) => (
            <div key={"div-" + panda.pandaTokenId.toString()}>
              <Col key={"col-" + panda.pandaTokenId.toString()} md={3}>
                <PandaCard
                  key={"panda-card-" + panda.pandaTokenId.toString()}
                  dna={panda.dna}
                  mumId={panda.mumId}
                  dadId={panda.dadId}
                  generation={panda.generation}
                  birthTime={epochToUTCDate(panda.birthTime)}
                />
              </Col>
              <Col md={1}></Col>
            </div>
          ))}
        </Row>
      </Container>
    );
  }
}

export default PandaGallery;
