import React, { Component } from 'react';
import { Container, Row ,Button, InputGroup,FormControl, Badge} from "react-bootstrap";
import PandaCard from "./PandaCard";
import {epochToUTCDate ,getPanda, setOffer, removeOffer,getOffer, setApprovalForAll , buyPanda} from "../assets/js/utils";
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
            },
            pandaOwner:0,
            IsMarketOpperator:false
        };
    }

    async componentDidMount(){
        let _pandaItem,_offer,_ownerOf,_isApprovedForAll;

        try{
            _isApprovedForAll = await this.props.contract.methods.isApprovedForAll(this.props.accounts[0],this.props.marketContract.options.address).call();
            this.setState(() => ({
              IsMarketOpperator: _isApprovedForAll   
            }));
          } catch(e){
            console.log("Not approved for all",e);
          }

        try{
            _pandaItem = await getPanda(this.props.contract, this.props.accounts,this.props.match.params.id);
        } catch(e){
            console.log("No Pandas");
        }
        
        try{
            _offer = await getOffer(this.props.marketContract, this.props.accounts,this.props.match.params.id);
            if(_offer.active===false){
                _offer = undefined;
            }
        } catch(e){
            console.log("No offer");
        }

        try{
            _ownerOf=await this.props.contract.methods.ownerOf(this.props.match.params.id).call({ from: this.props.accounts[0] }); 
        } catch(e){
            console.log("Error: executing OwnerOf");
        }

        this.setState(() => ({
            pandaItem: _pandaItem,
            offer: _offer,
            pandaOwner: _ownerOf
          }));
    }

    handleSubmit= async (event) => {
        event.preventDefault();
        if(this.state.offer===undefined){
            await setOffer(this.props.marketContract, this.props.accounts,this.props.web3.utils.toWei(String(this.state.amount)),this.props.match.params.id);
        }else if(this.props.accounts[0]===this.state.offer.seller){
            await removeOffer(this.props.marketContract, this.props.accounts,this.props.match.params.id);
        }else{ 
            await buyPanda(this.props.marketContract, this.props.accounts,this.props.match.params.id,this.state.offer.price);
        }       
    }

    handleChange= (event) => {
        event.preventDefault();
        event.persist();      
        this.setState(() => ({
            [event.target.name]: parseFloat(event.target.value)
          }));
    }

    handleRemove =  async (event) =>{
        event.preventDefault();
        await removeOffer(this.props.marketContract, this.props.accounts,this.props.match.params.id);
    }

    _setApprovalForAll =  async ()=>  {
        let _isApprovedForAll;
        
        setApprovalForAll(this.props.contract,this.props.marketContract,this.props.accounts,true);
       
        _isApprovedForAll = await this.props.contract.methods.isApprovedForAll(this.props.accounts[0],this.props.marketContract.options.address).call();
       
        this.setState(() => ({
          IsMarketOpperator: _isApprovedForAll
        }));
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
                        <div>
                            {this.state.offer !== undefined ?
                            <div>
                                <h4><Badge variant="secondary">Owner: {this.state.offer.seller}</Badge></h4>
                                <h4><Badge variant="secondary">Price: {this.props.web3.utils.fromWei(String(this.state.offer.price), 'ether')} ETH</Badge></h4>
                            </div>
                            :""}
                            {this.state.IsMarketOpperator === false & this.state.pandaOwner ===this.props.accounts[0] ?
                                    <div>
                                        <h2>Do you want to sell?</h2>
                                        <Button id="btn-permissions" onClick={this._setApprovalForAll}>Delegate Operator rights</Button>
                                    </div>
                            :
                                <form id="panda-detail-offer" onSubmit={this.handleSubmit}>
                                    {this.state.offer === undefined ?
                                        <div>
                                            {this.state.pandaOwner ===this.props.accounts[0]?
                                                <div>
                                                <InputGroup className="mb-3">
                                                    <FormControl aria-label="Amount" name="amount" onChange={this.handleChange}/>
                                                    <InputGroup.Append>
                                                        <InputGroup.Text>ETH</InputGroup.Text>
                                                    </InputGroup.Append>
                                                </InputGroup>
                                                <Button variant="success" type="submit">Sell</Button>
                                                </div>
                                            :""}
                                        </div>   
                                    :
                                        <div>
                                            <span className="space-between-elements"/>
                                            {this.props.accounts[0]===this.state.offer.seller?
                                            <Button variant="danger" type="submit">Remove Offer</Button>
                                            :
                                            <Button variant="success" type="submit">Buy Me</Button>
                                            }
                                        </div>
                                    }
                                </form>
                            }
                        </div>
                    </Row>
                :""}
            </Container>
        );
    }
}
 
export default PandaDetail;
