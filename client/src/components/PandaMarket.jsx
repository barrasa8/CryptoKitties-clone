import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import PandaCard from "./PandaCard";

import {epochToUTCDate ,getMarketOffers} from "../assets/js/utils";

import "../assets/css/PandaGallery.css"

class PandaMarket extends Component {
  constructor() {
    super();
    this.state = {
      OfferList: [],
      IsMarketOpperator:false
    };
  }

  async componentDidMount() {
    //console.log(this.props.marketContract.methods);
    let _pandaList = await getMarketOffers(this.props.marketContract, this.props.accounts);
    
    this.setState(() => ({
          OfferList: _pandaList
        }));
  }
  
  render() {
    return (
      <Container fluid>
        <Row className="justify-content-md-center body-title body-title-font">
                    <h1>Market Place</h1>
        </Row>
        {/* {this.props.birthEvent.generation > 0 ? 
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
        : ""} */}
        <Row className="justify-content-md-center">
          {/* {this.state.OfferList.map((Offer) => (
            <div key={"div-" + Offer.pandaTokenId.toString()}>
              <Col key={"col-" + Offer.pandaTokenId.toString()} md={3}>
                <PandaCard
                  key={"panda-card-" + Offer.pandaTokenId.toString()}
                  dna={Offer.dna}
                  mumId={Offer.mumId}
                  dadId={Offer.dadId}
                  generation={Offer.generation}
                  birthTime={epochToUTCDate(Offer.birthTime)}
                />
              </Col>
              <Col md={1}></Col>
            </div>
          ))} */}
        </Row>
      </Container>
    );
  }
}

export default PandaMarket;
