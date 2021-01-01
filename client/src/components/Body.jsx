import React, { Component } from 'react';

import PandaFactory from "./PandaFactory";
import PandaGallery from "./PandaGallery";
import PandaMarket from "./PandaMarket";
import BreedRoom from "./BreedRoom";
import Home from "./Home";
import PandaDetail from "./PandaDetail";

import { Route,Switch} from 'react-router-dom'

import "../assets/css/body.css";

class Body extends Component {
    constructor() {
        super();
        this.state = {
          BirthEvent: {
            owner: 0,
            PandaId: 0,
            mumId: 0,
            dadId: 0,
            genes: 0,
            generation:0
          },
          MarketContract:{
            TxType:"",
            owner:0, 
            tokenId:0
          }
        };
      }

    componentDidMount() {
        this.eventBirth();
        this.MarketTransactionEvent();
    }

    eventBirth = () => {
        this.props.contract.events.Birth({}, (error, event) => {
            if (error) {
            console.log(error);
            } else {
            this.setState((prevState) => ({
                BirthEvent: {
                ...prevState.BirthEvent,
                owner: event.returnValues._owner,
                PandaId: event.returnValues.PandaId,
                mumId: event.returnValues.mumId,
                dadId: event.returnValues.dadId,
                genes: event.returnValues.genes,
                generation: event.returnValues.generation
                },
            }));
            }
        });
    };


    MarketTransactionEvent = () => {
        this.props.marketContract.events.MarketTransaction({}, (error, event) => {
            if (error) {
            console.log(error);
            } else {
            this.setState((prevState) => ({
                MarketContract: {
                ...prevState.MarketContract,
                TxType: event.returnValues.TxType,
                owner: event.returnValues.owner,
                tokenId: event.returnValues.tokenId
                },
            }));
            }
        });
    };

    render() { 
        return ( 
            <div  className="app-body">
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/factory' component={()=> <PandaFactory contract ={this.props.contract} accounts={this.props.accounts} birthEvent={this.state.BirthEvent}/>}/>
                    <Route path='/gallery'component={() =>  <PandaGallery contract ={this.props.contract} accounts={this.props.accounts} birthEvent={this.state.BirthEvent}/>}/>
                    <Route path='/breed'component={() =>  <BreedRoom contract ={this.props.contract} accounts={this.props.accounts} birthEvent={this.state.BirthEvent}/>}/>
                    <Route path='/market'component={() =>  <PandaMarket contract ={this.props.contract} accounts={this.props.accounts} marketContract={this.props.marketContract}/>}/>
                    <Route path='/pandaDetail/:id' component={({match}) => <PandaDetail contract ={this.props.contract} accounts={this.props.accounts} marketContract={this.props.marketContract} match={match} marketTransactionEvent={this.state.MarketTransactionEvent}/>}/>
                </Switch>
            </div>
         );
    }
}
 
export default Body;