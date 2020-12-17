import React, { Component } from "react";

import { Container, Row, Col ,Button} from "react-bootstrap";
import PandaCard from "./PandaCard";

import {epochToUTCDate ,getMarketOffers,setApprovalForAll} from "../assets/js/utils";

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
    let _isApprovedForAll,_pandaList;
    _isApprovedForAll = await this.props.contract.methods.isApprovedForAll(this.props.accounts[0],this.props.marketContract.options.address).call();
    console.log("is market place approved ?",_isApprovedForAll);
    console.log(this.props.accounts[0],this.props.marketContract.options.address);

    //await this.props.marketContract.methods.setOffer(20022,2).call({from: this.props.accounts[0]});

    this.setState(() => ({
      IsMarketOpperator: _isApprovedForAll
    }));
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
        {this.state.IsMarketOpperator == false ?
          <Row className="justify-content-md-center">
            <Button id="btn-permissions" onClick={this._setApprovalForAll}>Delegate Operator rights</Button>
          </Row>
          :""
        }
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
