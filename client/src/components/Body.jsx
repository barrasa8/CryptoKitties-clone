import React, { Component } from 'react';

import PandaFactory from "./PandaFactory";
import PandaGallery from "./PandaGallery";
import Home from "./Home";

import {Route,Switch} from 'react-router-dom'

import "../assets/css/body.css";

class Body extends Component {
    state = {  }
    render() { 
        return ( 
            <div  className="app-body">
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/factory' component={()=> <PandaFactory contract ={this.props.contract} accounts={this.props.accounts}/>}/>
                    <Route path='/gallery'component={() =>  <PandaGallery contract ={this.props.contract} accounts={this.props.accounts}></PandaGallery>} />
                    <Route path='/breed'component={() =>  <PandaGallery contract ={this.props.contract} accounts={this.props.accounts}></PandaGallery>} />
                </Switch>
            </div>
         );
    }
}
 
export default Body;