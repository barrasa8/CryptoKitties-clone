import React, { Component } from 'react';
import Panda from "./Panda"
import DnaBadge from "./DnaBadge"

import "./PandaCard.css"

class PandaCard extends Component {
    constructor(props) {
        super(props);
      }
    render() { 
        return ( 
            <div className="pandaBox">
                <Panda dna={this.props.dna}/>
                <DnaBadge dna={this.props.dna}/>
            </div>
         );
    }
}
 
export default PandaCard;