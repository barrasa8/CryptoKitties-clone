import React, { Component } from 'react';
import { Container, Row ,Button, InputGroup,FormControl, Badge} from "react-bootstrap";
import PandaCard from "./PandaCard";
import {epochToUTCDate ,getPanda, setOffer, removeOffer,getOffer, getTotalSupply , getPandas} from "../assets/js/utils";
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
        let _pandaItem,_offer,_OnwerOfTokenId,_totalSupply,_panda,_pandaList,_PandaOwner;

        _OnwerOfTokenId = await this.props.contract.methods.ownerOf(this.props.match.params.id).call({ from: this.props.accounts[0] });
        _panda= await this.props.contract.methods.getPanda(1).call({ from: this.props.accounts[0] });
        console.log("@@@@ pandas Array",_panda);

        try{
            _pandaItem = await getPanda(this.props.contract, this.props.accounts,this.props.match.params.id);
        } catch(e){
            console.log("No Pandas");
        }
        
        try{
            _offer = await getOffer(this.props.marketContract, this.props.accounts,this.props.match.params.id);
        } catch(e){
            console.log("No offer",e);
        }

        try{
            _totalSupply = await getTotalSupply(this.props.contract, this.props.accounts);
        } catch(e){
            console.log("Error getting total supply");
        }

        try {
            console.log("before getPanda");
            // -- test 
            // _OnwerOfTokenId = await this.props.contract.ownerOf(this.props.match.params.id).call({ from: this.props.accounts[0] });
            //_panda = await this.props.contract.methods.getPanda(this.props.match.params.id).call({ from: this.props.accounts[0] });
            console.log("panda DETAIL contract and accoutns --> ",this.props.contract, this.props.accounts);
            _pandaList = await getPandas(this.props.contract, this.props.accounts);
        } catch (e) {
            console.log("Error getting Pandassss");
        }

        this.setState(() => ({
            pandaItem: _pandaItem,
            offer: _offer
          }));

          console.log("this is the owner of the token:",_OnwerOfTokenId)
          console.log("this is the total supply:",_totalSupply)
          console.log("this is the panda:",_pandaItem)
          console.log("from pandaDetail, pandas owned = ", _pandaList);
          console.log("from pandaDetail, panda offer = ", _offer);
          console.log("this is the marketTransactionEvent--> ",this.props.marketTransactionEvent);
          console.log("this is the TransferEvent--> ",this.props.TransferEvent);          
    }

    handleSubmit= async (event) => {
        event.preventDefault();
        if(this.state.offer===undefined){
            await setOffer(this.props.marketContract, this.props.accounts,this.props.web3.utils.toWei(String(this.state.amount)),this.props.match.params.id);
        }else if(this.props.accounts[0]===this.state.offer.seller){
            await removeOffer(this.props.marketContract, this.props.accounts,this.props.match.params.id);
        }else{
            console.log("inside the BUY SECTION",this.props.match.params.id,this.props.accounts[0],String(this.state.offer.price));
            let result = await this.props.marketContract.methods.getOffer(this.props.match.params.id).call();
            console.log("result getOffer: ",result);
            console.log("value in ether",this.props.web3.utils.toWei(String(this.state.offer.price), "ether"),this.state.offer.price);
            await this.props.marketContract.methods.buyPanda(this.props.match.params.id)
            .send({ from: this.props.accounts[0] ,
                value: this.state.offer.price});
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
                    {this.props.accounts[0]}
                </Row>
                {/* {this.state.offer !== undefined ?
                    <Row className="justify-content-md-center" >
                        <h4 id="panda-created-offer-message">Active Offer -- 
                            SELLER:  {" " +this.state.offer.seller+" "} 
                            TOKENID: {" " +this.state.offer.tokenId+" "}
                            PRICE:   {" " +this.state.offer.price +" ETH"}
                        </h4>
                    </Row>
                :""
                } */}
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
                            {this.state.offer !== undefined ?
                            <div>
                                <h4><Badge variant="secondary">Owner: {this.state.offer.seller}</Badge></h4>
                                <h4><Badge variant="secondary">Price: {this.props.web3.utils.fromWei(String(this.state.offer.price), 'ether')} ETH</Badge></h4>
                            </div>
                            :""}
                            <form id="panda-detail-offer" onSubmit={this.handleSubmit}>
                                {this.state.offer == undefined ?
                                    <div>
                                        <InputGroup className="mb-3">
                                            <FormControl aria-label="Amount" name="amount" onChange={this.handleChange}/>
                                            <InputGroup.Append>
                                                <InputGroup.Text>ETH</InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>
                                        <Button variant="success" type="submit">Sell</Button>
                                    </div>
                                :
                                    <div>
                                        <span className="space-between-elements"/>
                                        {this.props.accounts[0]==this.state.offer.seller?
                                            <Button variant="danger" type="submit">Remove Offer</Button>
                                        :
                                            <Button variant="success" type="submit">Buy Me</Button>
                                        }
                                    </div>
                                }
                            </form>
                        </div>
                    </Row>
                :""}
            </Container>
        );
    }
}
 
export default PandaDetail;
