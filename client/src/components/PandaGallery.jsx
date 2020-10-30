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
          pandaList:[]
        };
      }

    getPanda = async () => {  
      let _pandaList=[];
      let _pandaItem ; 
      
      const PandaTokenIdArray =   await this.props.contract.methods._pandasOfOwner(this.props.accounts[0]).call({from:this.props.accounts[0]});

      for (let i=0 ;i<PandaTokenIdArray.length;i++){
        let _panda = await this.props.contract.methods.getPanda(i).call({from:this.props.accounts[0]});
        
        _pandaItem={
          pandaTokenId: parseInt(i),
          mumId:parseInt(_panda.mumId),
          dadId:parseInt(_panda.dadId),
          birthTime:parseInt(_panda.birthTime),
          generation:parseInt(_panda.generation),
          genes:parseInt(_panda.genes),
          dna:genesToDNA(_panda.genes)
        }

        _pandaList.push(_pandaItem);
      }

      this.setState((prevState) => ({
        pandaList: _pandaList
      }));
      
      console.log("this is the list of pandas=>",this.state.pandaList);
      
    }
    
    componentDidMount(){
      this.getPanda();
    }

    render() { 
        return ( 
            <Container fluid>
                <Row className="justify-content-md-center">
                   {this.state.pandaList.map(panda => (
                      <Col key={"col-" +panda.genes.toString()}><PandaCard key={"panda-card-"+panda.genes.toString()} dna={panda.dna}></PandaCard></Col>
                    ))} 
                </Row>
            </Container>
        
         );
    }
}
 
export default PandaGallery;