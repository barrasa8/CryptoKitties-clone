import React, { Component } from 'react';
import { Container, Row ,Button,FormGroup, InputGroup,FormControl} from "react-bootstrap";
import PandaCard from "./PandaCard";
import {epochToUTCDate ,getPanda, setOffer} from "../assets/js/utils";
import "../assets/css/pandaDetail.css";

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

    handleSubmit= (event) => {
        //do something
        event.preventDefault();
        console.log(event.target);
    }


    // _setOffer=  ()=>  {
    //     setOffer(this.props.marketContract, this.props.accounts,????PRICE??,this.state.pandaItem.pandaTokenId);
    // }

    render() { 
        return (  
            <Container fluid>
                <Row className="justify-content-md-center body-title body-title-font">
                    <h1>Set your offer</h1>
                </Row>
                {/* <h1>Panda DETAIL -- +{this.props.match.params.id}</h1> */}
                {/* {console.log("pandaItem", this.state)} */}
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
                        <form id="panda-detail-offer" onSubmit={this.handleSubmit}>
                            <InputGroup className="mb-3">
                                <FormControl aria-label="Amount" name="amount"/>
                                <InputGroup.Append>
                                    <InputGroup.Text>ETH</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                            <Button type="submit"> Create Offer </Button>
                        </form>
                    </Row>
                :""}
            </Container>
        );
    }
}
 
export default PandaDetail;
