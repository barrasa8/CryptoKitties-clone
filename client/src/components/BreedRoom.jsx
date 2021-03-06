import React, { Component } from "react";

import { Container, Row, Col ,Button} from "react-bootstrap";

import {Redirect} from 'react-router-dom';

import {epochToUTCDate, getPandas, breed} from "../assets/js/utils";
import PandaCard from "./PandaCard";
import BreedModal from "./BreedModal";

import "../assets/css/breedRoom.css";

class BreedRoom extends Component {

  constructor() {
    super();
    this.state = {
      pandaList: [],
      MumPanda: {
        pandaTokenId:0,
        genes:0,
        birthTime:0,
        mumId:0,
        dadId:0,
        generation:0,
        dna:{
          dnaarmleg: 0,
          dnaeyepatch: 0,
          dnainnerearfoot: 0,
          dnaheadbody: 0,
          //Pandatributes
          dnaeyeshape: 0,
          dnamouthshape: 0,
          decorationMidcolor: 0,
          decorationSidescolor: 0,
          animation: 0,
          lastNum: 0
        }
      },
      DadPanda: {
        pandaTokenId:0,
        genes:0,
        birthTime:0,
        mumId:0,
        dadId:0,
        generation:0,
        dna:{
          dnaarmleg: 0,
          dnaeyepatch: 0,
          dnainnerearfoot: 0,
          dnaheadbody: 0,
          //Pandatributes
          dnaeyeshape: 0,
          dnamouthshape: 0,
          decorationMidcolor: 0,
          decorationSidescolor: 0,
          animation: 0,
          lastNum: 0
        }
      },
      isRedirect:0,
      modalShow:true,
      mumPandaShow:0,
      dadPandaShow:0
    };
  }

  handleClick = (index,parentType) => {

    if(parentType==="mum"){
      this.setState(() => ({
        MumPanda: this.state.pandaList[index],
        mumPandaShow: 1
      }));
    }else{
      this.setState(() => ({
        DadPanda: this.state.pandaList[index],
        dadPandaShow:1
      }));
    }
  }

  _Breed=  ()=>  {
    if(this.state.MumPanda.pandaTokenId === this.state.DadPanda.pandaTokenId){
      alert("Dad and Mum have to be different");
    }else{
      breed(this.props.contract, this.props.accounts,this.state.MumPanda.pandaTokenId,this.state.DadPanda.pandaTokenId)
      this.setState(() => ({
          isRedirect: 1
        }));  
    }
  }

  async componentDidMount() {
    let _pandaList = await getPandas(this.props.contract, this.props.accounts);
    this.setState(() => ({
          pandaList: _pandaList,
          MumPanda: _pandaList[0],
          DadPanda: _pandaList[0]
        }));
    
  }

  componentWillUnmount(){
    this.setState.isRedirect=0;
  }

  render() {
    return (
      <Container>
        {this.state.isRedirect>0 ? <Redirect to="/gallery" />: ""}
        <Row className="justify-content-md-center body-title body-title-font">
          <div align="center">
            <h1 className="c-black">Breeding Room</h1>
            <p className="c-black">Please give the pandas some privacy</p>
            <br />
            <h4 id="panda-created-message"> </h4>
          </div>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={{span:5}}>
            <BreedModal contract ={this.props.contract} accounts={this.props.accounts} handleclick={this.handleClick} parenttype="mum"/>
          </Col>
          <Col md={{span:2}}></Col>
          <Col md={{span:5}}>
            <BreedModal contract ={this.props.contract} accounts={this.props.accounts} handleclick={this.handleClick} parenttype="dad"/>
          </Col>
        </Row>
        {(() => {
            if (this.state.pandaList.length > 1) {
              return (
                    <Row className="justify-content-md-center">
                      <Col md={{span:5}}>
                      {this.state.mumPandaShow===1 ? 
                        <PandaCard
                        key={"panda-card-mum" + this.state.MumPanda.genes.toString()}
                        dna={this.state.MumPanda.dna}
                        mumId={this.state.MumPanda.mumId}
                        dadId={this.state.MumPanda.dadId}
                        generation={this.state.MumPanda.generation}
                        birthTime={epochToUTCDate(this.state.MumPanda.birthTime)}
                        />
                      : <div className="empty-box body-title-font">Pick Mum</div>}                        
                      </Col>
                      <Col md={{span:2}}>
                        <Button className="scale vertical-center" id="btn-breed" onClick={this._Breed}>BREED</Button>
                      </Col>
                      <Col md={{span:5}}>
                        {this.state.dadPandaShow===1 ?
                        <PandaCard
                        key={"panda-card-mum" + this.state.DadPanda.genes.toString()}
                        dna={this.state.DadPanda.dna}
                        mumId={this.state.DadPanda.mumId}
                        dadId={this.state.DadPanda.dadId}
                        generation={this.state.DadPanda.generation}
                        birthTime={epochToUTCDate(this.state.DadPanda.birthTime)}
                      />
                      : <div className="empty-box body-title-font">Pick Dad</div>}
                      </Col>
                    </Row>
              )
            }else {
              return (
                <Row className="justify-content-md-center">
                  <h3> You need 2 pandas to be able to breed</h3>
                </Row>
              )
            }
        })()}
      </Container>
    );
  }
}

export default BreedRoom;
