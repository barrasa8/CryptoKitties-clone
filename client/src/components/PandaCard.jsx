import React, { Component } from "react";
import Panda from "./Panda";
import DnaBadge from "./DnaBadge";

import "../assets/css/PandaCard.css";
import { allEyeVariations } from "../assets/js/shapes";
import { allMouthVariations } from "../assets/js/shapes";
import { allAnimations } from "../assets/js/animations";

const eyeShapes = allEyeVariations();
const mouthShapes = allMouthVariations();
const animations = allAnimations();

class PandaCard extends Component {
  render() {
    return (
      <div className={"pandaBox hightlight " + this.props.className}>
        <Panda
          dna={this.props.dna}
          eyeShape={eyeShapes[this.props.dna.dnaeyeshape].toLowerCase()}
          mouthShape={mouthShapes[this.props.dna.dnamouthshape].toLowerCase()}
          animations={animations[this.props.dna.animation]}
        />
        <DnaBadge
          dna={this.props.dna}
          mumId={this.props.mumId}
          dadId={this.props.dadId}
          generation={this.props.generation}
          birthTime={this.props.birthTime}
        />
      </div>
    );
  }
}

export default PandaCard;
