import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import PandaCard from "./PandaCard";

import {epochToUTCDate ,getPanda} from "../assets/js/utils";

import {Redirect, Link} from 'react-router-dom';

import "../assets/css/PandaGallery.css"

class PandaGallery extends Component {
  constructor() {
    super();
    this.state = {
      pandaList: [],
      //isRedirect:0
    };
  }

  async componentDidMount() {
    let _pandaList = await getPanda(this.props.contract, this.props.accounts);

    this.setState(() => ({
          pandaList: _pandaList
        }));
  }

  // handleClick = (index) => {
  //   console.log("inside handle click");
  //   this.setState(() => ({
  //     isRedirect: 1
  //   }));
  // }
  
  render() {
    return (
      <Container fluid>
        {/* {this.state.isRedirect>0 ? <Redirect to={{pathname: '/pandaDetail',
                                                  state: { id: '1' }
                                                }}
        />: ""} */}
        <Row className="justify-content-md-center body-title body-title-font">
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
                <Link to={"/pandaDetail/"+panda.pandaTokenId.toString()}>
                  <PandaCard
                    key={"panda-card-" + panda.pandaTokenId.toString()}
                    dna={panda.dna}
                    mumId={panda.mumId}
                    dadId={panda.dadId}
                    generation={panda.generation}
                    birthTime={epochToUTCDate(panda.birthTime)}
                    className="cursor-pointer"
                  />
                </Link>
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
