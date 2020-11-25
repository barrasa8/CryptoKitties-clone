import React, { Component } from "react";

import { Modal, Button, ButtonToolbar, Row, Col } from "react-bootstrap";

import PandaCard from "./PandaCard";

import {epochToUTCDate ,getPanda} from "../assets/js/utils";

import "../assets/css/breedModal.css"

class BreedModal extends Component {
  constructor() {
    super();

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);

    this.state = {
      pandaList: [],
      isRedirect: 0,
      show: false,
    };
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleHide() {
    this.setState({ show: false });
  }

  async componentDidMount() {
    let _pandaList = await getPanda(this.props.contract, this.props.accounts);

    this.setState(() => ({
          pandaList: _pandaList
        }));
  }

  render() {
    return (
      <ButtonToolbar>
        <Button className="btn-parent" variant="warning" onClick={this.handleShow}>
           {"Select " + this.props.parenttype}
          </Button>

        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="custom-modal"
          onClick={this.handleHide}         
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
              {this.props.parenttype +" Panda"}
              </Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <Row>
            {this.state.pandaList.map((panda,index) => (
                <div className="panda-col-wrapper" key={"div-" + panda.pandaTokenId.toString()} value={index}>
                  <Col key={"col-" + panda.pandaTokenId.toString()} md={3} onClick={()=>this.props.handleclick(index.toString(),this.props.parenttype)}>
                    <PandaCard
                      key={"panda-card-" + panda.pandaTokenId.toString()}
                      dna={panda.dna}
                      mumId={panda.mumId}
                      dadId={panda.dadId}
                      generation={panda.generation}
                      birthTime={epochToUTCDate(panda.birthTime)}
                      className="cursor-pointer"
                    />
                  </Col>
                  <Col md={1}></Col>
                </div>
            ))}
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
}

export default BreedModal;
