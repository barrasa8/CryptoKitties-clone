import React, { Component } from 'react';
import { Container, Row ,Button, InputGroup,FormControl} from "react-bootstrap";
import PandaCard from "./PandaCard";
import {epochToUTCDate ,getPanda, setOffer, removeOffer,getOffer} from "../assets/js/utils";
import "../assets/css/pandaDetail.css";

class PandaDetail extends Component {

    constructor() {
        super();
        this.state = {
            pandaItem:null,
            amount:0,
            offer:{
                seller: "",
                price: 0, 
                index: 0, 
                tokenId: 0, 
                active: false
            }
        };
    }

    async componentDidMount(){
        let _pandaItem,_offer;

        try {
            _pandaItem = await getPanda(this.props.contract, this.props.accounts,this.props.match.params.id);
            _offer = await getOffer(this.props.marketContract, this.props.accounts,this.props.match.params.id);
        } catch (e) {
            console.log("Hello Catch");
        }

        this.setState(() => ({
            pandaItem: _pandaItem,
            offer: _offer
          }));
    }

    handleSubmit= async (event) => {
        event.preventDefault();
        if(this.state.offer===undefined){
            await setOffer(this.props.marketContract, this.props.accounts,this.state.amount,this.props.match.params.id);
        }else{
            await removeOffer(this.props.marketContract, this.props.accounts,this.props.match.params.id);
        }        
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
        // console.log(event);
        // console.log(this.props.match.params.id);
        await removeOffer(this.props.marketContract, this.props.accounts,this.props.match.params.id);
        //console.log("market event from the REMOVE",this.props.marketTransactionEvent);
    }

    render() { 
        return (  
            <Container fluid>
                <Row className="justify-content-md-center body-title body-title-font">
                    <h1>Set your offer</h1>
                </Row>
                {this.state.offer !== undefined ?
                    <Row className="justify-content-md-center" >
                        <h4 id="panda-created-offer-message">Active Offer -- 
                            SELLER:  {" " +this.state.offer.seller+" "} 
                            TOKENID: {" " +this.state.offer.tokenId+" "}
                            PRICE:   {" " +this.state.offer.price +" ETH"}
                        </h4>
                    </Row>
                :""
                }
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
                        <div>
                            <form id="panda-detail-offer" onSubmit={this.handleSubmit}>
                                <InputGroup className="mb-3">
                                    <FormControl aria-label="Amount" name="amount" onChange={this.handleChange}/>
                                    <InputGroup.Append>
                                        <InputGroup.Text>ETH</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                                
                                <span className="space-between-elements"/>
                                <Button variant={this.state.offer===undefined?"success":"danger"} type="submit">
                                         {this.state.offer===undefined?"Create":"Remove"} Offer 
                                </Button>
                            </form>
                        </div>
                    </Row>
                :""}
            </Container>
        );
    }
}
 
export default PandaDetail;
