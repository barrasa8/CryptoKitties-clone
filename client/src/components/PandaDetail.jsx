import React, { Component } from 'react';
import { Container, Row, Col ,Button} from "react-bootstrap";
import PandaCard from "./PandaCard";
import {epochToUTCDate ,getPanda} from "../assets/js/utils";

class PandaDetail extends Component {

    constructor() {
        super();
        this.state = {
            pandaItem:null
        };
    }

    async componentDidMount(){
        let _pandaItem = await getPanda(this.props.contract, this.props.accounts,this.props.match.params.id);

        this.setState(() => ({
            pandaItem: _pandaItem
          }));
    }

    render() { 
        return (  
            <Container fluid>
                {/* <h1>Panda DETAIL -- +{this.props.match.params.id}</h1> */}
                {console.log("pandaItem", this.state)}
                {this.state.pandaItem != null ?
                    <Row className="justify-content-md-center">
                     
                            <PandaCard
                                key={"panda-card-" + this.state.pandaItem.pandaTokenId.toString()}
                                dna={this.state.pandaItem.dna}
                                mumId={this.state.pandaItem.mumId}
                                dadId={this.state.pandaItem.dadId}
                                generation={this.state.pandaItem.generation}
                                birthTime={epochToUTCDate(this.state.pandaItem.birthTime)}
                                className="cursor-pointer"
                            />
                       <span className="space-between-elements"/>
                            <Button> Create Offer </Button>
                        
                    </Row>
                :""}
            </Container>
        );
    }
}
 
export default PandaDetail;
