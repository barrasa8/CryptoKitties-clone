import React, { Component } from "react";

import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";

import PandaCard from "./pandacard";
import PandaAttributes from "./pandaattributes";

class pandaSettings extends Component {
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
      },
    };
  }

  setDefaultPandaDna = () => {
    this.setState({
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
      lastNum: 1,
    });
  };

  changeFunction = (_dnaProperty,_dna) => {
    console.log(
      "this is the DNA from slider " + _dnaProperty + "  " + JSON.stringify(_dna)
    );

    this.setState((prevState) => ({
      dna: {
        ...prevState.dna,
        dnaarmleg: _dna,
      },
    }));

    // this.setState({
    //   dna: _dna,
    // });
    console.log("change function triggered" + JSON.stringify(this.state.dna));
  };

  render() {
    return (
      <Container fluid>
        <Row className="justify-content-md-center">
          <PandaCard dna={this.state.dna} />
          <PandaAttributes changeFunction={this.changeFunction} />
        </Row>
        <br />
        <Row>
          <Col md={{ span: 4, offset: 3 }}>
            <button
              type="button"
              className="btn btn-success"
              id="default-panda-button"
              onClick={this.setDefaultPandaDna}
            >
              Default Panda
            </button>
          </Col>
          <Col md={{ span: 2, offset: 1 }}></Col>
        </Row>
      </Container>
    );
  }
}

export default pandaSettings;
