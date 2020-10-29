import React, { Component } from 'react';

import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import PandaCard from './PandaCard';

import {genesToDNA} from "../assets/js/utils";

let pandaList=[];
let pandaItem ;
let genesList=[];

class PandaGallery extends Component {
    constructor() {
        super();
        this.state = {
          pandaList:[]
        };
      }
    
    async componentDidMount(){
      const PandaTokenIdArray =   await this.props.contract.methods._pandasOfOwner(this.props.accounts[0]).call({from:this.props.accounts[0]});

      for (let i=0 ;i<PandaTokenIdArray.length;i++){
        let genes = await this.props.contract.methods.getPanda(i).call({from:this.props.accounts[0]});
        genesList.push(genes);

        pandaItem={
          pandaTokenId: parseInt(i),
          mumId:parseInt(genes.mumId),
          dadId:parseInt(genes.dadId),
          birthTime:parseInt(genes.birthTime),
          generation:parseInt(genes.generation),
          dna:genesToDNA(genes.genes)
        }

        pandaList.push(pandaItem);
      }

      this.setState((prevState) => ({
        pandaList: pandaList
      }));
      
      console.log("this is the list of pandas=>",this.state.pandaList);
      
    }

    render() { 
        return ( 
            <Container fluid>
                <Row className="justify-content-md-center">
                   {this.state.pandaList.map(panda => (
                      <Col key={panda.pandaTokenId}><PandaCard key={panda.pandaTokenId} dna={panda.dna}></PandaCard></Col>
                    ))} 
                </Row>
            </Container>
        
         );
    }
}
 
export default PandaGallery;