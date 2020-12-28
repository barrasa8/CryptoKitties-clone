import React, { Component } from 'react';
import { Container, Row ,Button,FormGroup, InputGroup,FormControl} from "react-bootstrap";
import PandaCard from "./PandaCard";
import {epochToUTCDate ,getPanda, setOffer, removeOffer, getActiveOfferCount, getOffer} from "../assets/js/utils";
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

        console.log(this.props.marketTransactionEvent);
    }

    handleSubmit= async (event) => {
        event.preventDefault();
        console.log("this is the envent",event.target.value);
        let ActiveOfferCount = await getActiveOfferCount(this.props.marketContract, this.props.accounts);
        console.log("BEFORE CREATE OFFER -- Active offers count = ",ActiveOfferCount);
        console.log("addresses market and account[0]",this.props.marketContract, this.props.accounts[0]);
        let r =await setOffer(this.props.marketContract, this.props.accounts,this.state.amount,this.props.match.params.id);
        console.log("Before the GET OFFER--> ",this.props.marketContract, this.props.accounts,this.props.match.params.id);
        let offer = await getOffer(this.props.marketContract, this.props.accounts,this.props.match.params.id);
        console.log("this is the offer",offer,r);
        ActiveOfferCount = await getActiveOfferCount(this.props.marketContract, this.props.accounts);
        console.log("AFTER CREATE OFFER -- Active offers count = ",ActiveOfferCount);
    }

    handleChange= (event) => {
        event.preventDefault();
        event.persist();
        this.setState(() => ({
            [event.target.name]: parseInt(event.target.value)
          }));
    }

    handleRemove =  async (event) =>{
        event.preventDefault();
        console.log(event);
        console.log(this.props.match.params.id);
        await removeOffer(this.props.marketContract, this.props.accounts,this.props.match.params.id);
    }

    render() { 
        return (  
            <Container fluid>
                <Row className="justify-content-md-center body-title body-title-font">
                    <h1>Set your offer {this.props.match.params.id}</h1>
                </Row>
                {this.state.pandaItem != null ?
                    <Row className="justify-content-md-center">
                     {/* <p>{this.state.pandaItem.pandaTokenId}</p> */}
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
                            
                            <span className="space-between-elements"/>
                            <Button variant="success" type="submit"> Create Offer </Button>
                        </form>
                        <form onSubmit={this.handleRemove}>
                            <Button variant="danger" type="submit"> Remove Offer </Button>
                        </form>
                    </Row>
                :""}
            </Container>
        );
    }
}
 
export default PandaDetail;
