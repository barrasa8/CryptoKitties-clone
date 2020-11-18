import React, { Component } from 'react';

import PandaFactory from "./PandaFactory";
import PandaGallery from "./PandaGallery";
import BreedRoom from "./BreedRoom";
import Home from "./Home";

import {Route,Switch} from 'react-router-dom'

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
        };
      }


    componentDidMount() {
        this.eventBirth();
    }

    componentDidUpdate(){
        console.log("body did update");
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

    render() { 
        return ( 
            <div  className="app-body">
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/factory' component={()=> <PandaFactory contract ={this.props.contract} accounts={this.props.accounts} birthEvent={this.state.BirthEvent}/>}/>
                    <Route path='/gallery'component={() =>  <PandaGallery contract ={this.props.contract} accounts={this.props.accounts} birthEvent={this.state.BirthEvent}/>}/>
                    <Route path='/breed'component={() =>  <BreedRoom contract ={this.props.contract} accounts={this.props.accounts}/>}/>
                </Switch>
            </div>
         );
    }
}
 
export default Body;