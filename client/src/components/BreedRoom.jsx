import React, { Component } from "react";

import { Container, Row, Col ,Button} from "react-bootstrap";

import {Redirect} from 'react-router-dom';

import {epochToUTCDate, getPanda, breed} from "../assets/js/utils";
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
    };
  }

  handleChange = (e) => {
    let optionId = parseInt(e.target.value) ;
    let optionName = e.target.options[optionId].getAttribute('data-key');
    
    if(optionName==="mum"){
      this.setState(() => ({
        MumPanda: this.state.pandaList[optionId],
      }));
    }else{
      this.setState(() => ({
        DadPanda: this.state.pandaList[optionId]
      }));
    }
  }

  handleClick = (index,parentType) => {
    
    // console.log("inside the handleChange-->",index);

    if(parentType==="mum"){
      this.setState(() => ({
        MumPanda: this.state.pandaList[index],
      }));
    }else{
      this.setState(() => ({
        DadPanda: this.state.pandaList[index]
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
    let _pandaList = await getPanda(this.props.contract, this.props.accounts);
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
        <Row className="justify-content-md-center body-title">
          <div align="center">
            <h1 className="c-black">Breeding Room</h1>
            <p className="c-black">Please give the pandas some privacy</p>
            <br />
            <h4 id="panda-created-message"> </h4>
          </div>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={{span:5}}>
            <BreedModal contract ={this.props.contract} accounts={this.props.accounts} handleclick={this.handleClick} parentType="mum"/>
          </Col>
          <Col md={{span:2}}></Col>
          <Col md={{span:5}}>
            <BreedModal contract ={this.props.contract} accounts={this.props.accounts} handleclick={this.handleClick} parentType="dad"/>
          </Col>
        </Row>
        {(() => {
            if (this.state.pandaList.length > 1) {
              return (
                    <Row className="justify-content-md-center">
                      <Col md={{span:5}}>
                        <PandaCard
                          key={"panda-card-mum" + this.state.MumPanda.genes.toString()}
                          dna={this.state.MumPanda.dna}
                          mumId={this.state.MumPanda.mumId}
                          dadId={this.state.MumPanda.dadId}
                          generation={this.state.MumPanda.generation}
                          birthTime={epochToUTCDate(this.state.MumPanda.birthTime)}
                        />
                      </Col>
                      <Col md={{span:2}}>
                        <Button className="scale vertical-center btn-breed" onClick={this._Breed}>BREED</Button>
                      </Col>
                      <Col md={{span:5}}>
                        <PandaCard
                          key={"panda-card-mum" + this.state.DadPanda.genes.toString()}
                          dna={this.state.DadPanda.dna}
                          mumId={this.state.DadPanda.mumId}
                          dadId={this.state.DadPanda.dadId}
                          generation={this.state.DadPanda.generation}
                          birthTime={epochToUTCDate(this.state.DadPanda.birthTime)}
                        />
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
