import React, { Component } from 'react';
import { Container, Row ,Button,FormGroup, InputGroup,FormControl} from "react-bootstrap";
import PandaCard from "./PandaCard";
import {epochToUTCDate ,getPanda, setOffer, removeOffer, getActiveOfferCount} from "../assets/js/utils";
import "../assets/css/pandaDetail.css";

class PandaDetail extends Component {

    constructor() {
        super();
        this.state = {
            pandaItem:null,
            amount:0
        };
    }

    async componentDidMount(){
        let _pandaItem = await getPanda(this.props.contract, this.props.accounts,this.props.match.params.id);

        this.setState(() => ({
            pandaItem: _pandaItem
          }));
    }

    handleSubmit= async (event) => {
        event.preventDefault();
        let ActiveOfferCount = await getActiveOfferCount(this.props.marketContract, this.props.accounts);
        console.log("ACtive offers count = ",ActiveOfferCount)
        //console.log("submitting amount",typeof(this.state.amount),this.state.amount);
        await setOffer(this.props.marketContract, this.props.accounts,this.state.amount,this.state.pandaItem.pandaTokenId);
    }

    handleChange= (event) => {
        event.preventDefault();
        event.persist();
        this.setState(() => ({
            [event.target.name]: parseInt(event.target.value)
          }));
    }

    handleRemove =  async() =>{
        await removeOffer(this.props.marketContract, this.props.accounts,this.state.pandaItem.pandaTokenId);
    }

    render() { 
        return (  
            <Container fluid>
                <Row className="justify-content-md-center body-title body-title-font">
                    <h1>Set your offer</h1>
                </Row>
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
                                <FormControl aria-label="Amount" name="amount" onChange={this.handleChange}/>
                                <InputGroup.Append>
                                    <InputGroup.Text>ETH</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                            <Button variant="danger" type="submit" onChange={this.handleRemove}> Remove Offer </Button>
                            <span className="space-between-elements"/>
                            <Button variant="success" type="submit"> Create Offer </Button>
                        </form>
                        
                    </Row>
                :""}
            </Container>
        );
    }
}
 
export default PandaDetail;
