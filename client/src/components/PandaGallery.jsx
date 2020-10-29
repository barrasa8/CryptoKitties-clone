import React, { Component } from 'react';

import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import PandaCard from './PandaCard';

import {genesToDNA} from "../assets/js/utils";



class PandaGallery extends Component {
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
          pandaList:[]
        };
      }
    
    async componentDidMount(){

      let pandaTokenList;
      let pandaItem;
      
      const PandaTokenIdArray =   await this.props.contract.methods._pandasOfOwner(this.props.accounts[0]).call({from:this.props.accounts[0]});
      // const PandaToken = await this.props.contract.methods.getPanda(1).call({from:this.props.accounts[0]});

      //console.log ("this is the result of getPandaOfOwner-->" , PandaTokenIdArray);
      // console.log ("this is the result of getPandaOfOwner-->" , PandaToken);

      // console.log ("this is panda 2--> ",genesToDNA(PandaToken.genes));

      // pandaTokenList = [{
      //   pandaTokenId: PandaTokenIdArray[1],
      //   mumId:PandaToken.mumId,
      //   dadId: PandaToken.dadId,
      //   birthTime:PandaToken.birthTime,
      //   generation:PandaToken.generation,
      //   dna:genesToDNA(PandaToken.genes)
      // }]

      // const pandaTokenList2 =   PandaTokenIdArray.map(tokenId =>{
      //   pandaItem={
      //     pandaTokenId: tokenId,
      //     mumId:PandaToken.mumId,
      //     dadId: PandaToken.dadId,
      //     birthTime:PandaToken.birthTime,
      //     generation:PandaToken.generation//,
      //     //dna:genesToDNA(PandaToken.genes)
      //   }
      // })

      // this.setState((prevState) => ({
      //   pandaList: pandaTokenList2
      // }));
      
      // console.log("this is the list of pandas=>",pandaTokenList2);
      
    }

    render() { 
        return ( 
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col><PandaCard dna={this.state.dna}></PandaCard></Col>
                    <Col><PandaCard dna={this.state.dna}></PandaCard></Col>
                    <Col><PandaCard dna={this.state.dna}></PandaCard></Col>
                </Row>
            </Container>
        
         );
    }
}
 
export default PandaGallery;