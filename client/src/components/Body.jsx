import React, { Component } from 'react';

import PandaSettings from "./PandaSettings";
import PandaGallery from "./PandaGallery";
import Home from "./Home";

import {Route} from 'react-router-dom'

import "../assets/css/body.css";

class Body extends Component {
    state = {  }
    render() { 
        return ( 
            <div  className="app-body">
                <Route path='/' exact component={Home}/>
                <Route path='/factory' component={()=> <PandaSettings contract ={this.props.contract} accounts={this.props.accounts}/>}/>
                <Route path='/gallery'component={() =>  <PandaGallery contract ={this.props.contract} accounts={this.props.accounts}></PandaGallery>} />
            </div>
         );
    }
}
 
export default Body;