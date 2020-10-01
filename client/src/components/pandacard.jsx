import React, { Component } from 'react';
import Panda from "./panda"
import DnaBadge from "./dnabadge"

import "./pandacard.css"

class pandaCard extends Component {
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
 
export default pandaCard;