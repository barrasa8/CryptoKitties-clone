import React, { Component } from "react";

import { Modal, Button, ButtonToolbar , Col , Form } from "react-bootstrap";

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

  handleChange = (e) => {
    let optionId = parseInt(e.target.value) ;
    //let optionName = e.target.options[optionId].getAttribute('data-key');
    
console.log("inside the handleChange-->",e.target);

    // if(optionName==="mum"){
    //   this.setState(() => ({
    //     MumPanda: this.state.pandaList[optionId],
    //   }));
    // }else{
    //   this.setState(() => ({
    //     DadPanda: this.state.pandaList[optionId]
    //   }));
    // }
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
        <Button className="primary" onClick={this.handleShow}>
          Launch demo modal
          </Button>

        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
              Mum Panda
              </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.pandaList.map((panda,index) => (
                <div className="panda-col-wrapper" key={"div-" + panda.pandaTokenId.toString()} value={index} data-key="mum" onClick={this.handleChange}>
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
