import React, { Component } from "react";

import { Container, Row, Col ,Button, Badge} from "react-bootstrap";
import PandaCard from "./PandaCard";

import { Link} from 'react-router-dom';

import {epochToUTCDate ,getMarketOffers,setApprovalForAll} from "../assets/js/utils";

import "../assets/css/PandaGallery.css"

class PandaMarket extends Component {
  constructor() {
    super();
    this.state = {
      OfferList: [],
      IsMarketOpperator:false,
      offerCount:0
    };
  }

  async componentDidMount() {
    let _isApprovedForAll, _activeOfferCount, _offerList;
    _isApprovedForAll = await this.props.contract.methods.isApprovedForAll(this.props.accounts[0],this.props.marketContract.options.address).call();
    
    _activeOfferCount = await this.props.marketContract.methods.getActiveOfferCount().call();

    if(_activeOfferCount>0){
      _offerList =await getMarketOffers(this.props.contract,this.props.marketContract,this.props.accounts);
    }
    
    this.setState(() => ({
      offerCount: _activeOfferCount,
      IsMarketOpperator: _isApprovedForAll,
      OfferList: _offerList
    }));

    console.log("OfferCount: ",this.state.offerCount);
    console.log("IsMarketOpperator: ",this.state.IsMarketOpperator);
  }

  _setApprovalForAll =  ()=>  {
      setApprovalForAll(this.props.contract,this.props.marketContract,this.props.accounts,true);
      this.setState(() => ({
        IsMarketOpperator: true
      }));
  }
  
  render() {
    return (
      <Container fluid>
        <Row className="justify-content-md-center body-title body-title-font">
                    <h1>Market Place</h1>
        </Row>
        {this.state.IsMarketOpperator === false ?
          <Row className="justify-content-md-center">
            <Button id="btn-permissions" onClick={this._setApprovalForAll}>Delegate Operator rights</Button>
          </Row>
          :""
        }
        <Row className="justify-content-md-center">
          {parseInt(this.state.offerCount) === 0 && this.state.IsMarketOpperator===true?
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
