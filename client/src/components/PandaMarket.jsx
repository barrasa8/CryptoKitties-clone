import React, { Component } from "react";

import { Container, Row, Col , Badge} from "react-bootstrap";
import PandaCard from "./PandaCard";

import { Link} from 'react-router-dom';

import {epochToUTCDate ,getMarketOffers} from "../assets/js/utils";

import "../assets/css/PandaGallery.css"

class PandaMarket extends Component {
  constructor() {
    super();
    this.state = {
      OfferList: [],
      offerCount:0
    };
  }

  async componentDidMount() {
    let _activeOfferCount, _offerList;
    
    try{
      _activeOfferCount = await this.props.marketContract.methods.getActiveOfferCount().call();
      
      try{      
        if(_activeOfferCount>0){
          _offerList =await getMarketOffers(this.props.contract,this.props.marketContract,this.props.accounts);

          this.setState(() => ({
            offerCount: _activeOfferCount,
            OfferList: _offerList
          }));
        }
      } catch(e){
        console.log("No Market offers",e);
      }
  
    } catch(e){
      console.log("no actove offer count--> ",e);
    }
  }
  
  render() {
    return (
      <Container fluid>
        <Row className="justify-content-md-center body-title body-title-font">
                    <h1>Market Place</h1>
        </Row>
        <Row className="justify-content-md-center">
          {parseInt(this.state.offerCount) === 0 ?
          <h4 className="body-title-font">There are no offers right now</h4>
          :""
          }
          {this.state.offerCount > 0 ?
            this.state.OfferList.map((Offer) => (
              <div key={"div-" + Offer.tokenId.toString()}>
                <Col key={"col-" + Offer.tokenId.toString()} md={3}>
                  <Link to={"/pandaDetail/"+Offer.tokenId.toString()}>
                    <PandaCard
                      key={"panda-card-" + Offer.tokenId.toString()}
                      dna={Offer.dna}
                      mumId={Offer.mumId}
                      dadId={Offer.dadId}
                      generation={Offer.generation}
                      birthTime={epochToUTCDate(Offer.birthTime)}
                    />
                  </Link>                  
                  <h3><Badge variant="secondary">{this.props.web3.utils.fromWei(String(Offer.price), 'ether')} ETH</Badge></h3>
                </Col>
                <Col md={1}></Col>
              </div>
            ))
          :""}
        </Row>
      </Container>
    );
  }
}

export default PandaMarket;
