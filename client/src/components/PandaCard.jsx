import React, { Component } from 'react';
import Panda from "./Panda"
import DnaBadge from "./DnaBadge"

import "./PandaCard.css"

class PandaCard extends Component {
    constructor(props) {
        super(props);

        this.state ={
            eyeShape :  {
              1: "Normal",
              2: "Shy",
              3: "Right-Thinker",
              4: "Left-Thinker"
            }
            ,mouthShape :  {
              1: "Normal",
              2: "Happy",
              3: "Sad",
              4: "Surprise"
            }
            ,animations :  {
                1: "Off",
                2: "Head",
                3: "Nose",
                4: "Left-Foot",
                5: "Right-Foot",
                6: "Both-Feet"
            }
          }
      }
    render() { 
        return ( 
            <div className="pandaBox">
                <Panda  dna={this.props.dna} 
                        eyeShape={this.state.eyeShape[this.props.dna.dnaeyeshape].toLowerCase()}
                        mouthShape={this.state.mouthShape[this.props.dna.dnamouthshape].toLowerCase()}
                        animations={this.state.animations[this.props.dna.animation]}
                        />
                <DnaBadge dna={this.props.dna}/>
            </div>
         );
    }
}
 
export default PandaCard;