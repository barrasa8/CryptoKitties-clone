import React, { Component } from "react";

import { Modal, Button ,ButtonToolbar} from "react-bootstrap";

import PandaGallery from "./PandaGallery";

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
                Modal heading
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Wrapped Text</h4>
              <PandaGallery contract ={this.props.contract} accounts={this.props.accounts} birthEvent={this.props.birthEvent}/>
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
