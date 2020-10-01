import React, { Component } from "react";
import "./dnabadge.css";

class dnaBadge extends Component {

    constructor(props) {
        super(props);
      }

    componentDidUpdate(){
        console.log("dnaBadge is updated" + JSON.stringify(this.props.dna))
    }


  render() {
    return (
      <div className="dnaDiv" id="catDNA">
        <b>
          DNA:
          {/* <!-- Colors --> */}
          <span id="dnaarmleg">{this.props.dna.dnaarmleg}</span>
          <span id="dnaeyepatch">{this.props.dna.dnaeyepatch}</span>
          <span id="dnainnerearfoot">{this.props.dna.dnainnerearfoot}</span>
          <span id="dnaheadbody">{this.props.dna.dnaheadbody}</span>
          {/* <!-- Pandatributes --> */}
          <span id="dnaeyeshape">{this.props.dna.dnaeyeshape}</span>
          <span id="dnamouthshape">{this.props.dna.dnamouthshape}</span>
          <span id="dnadecorationMid">{this.props.dna.decorationMidcolor}</span>
          <span id="dnadecorationSides">{this.props.dna.decorationSidescolor}</span>
          <span id="dnaanimation">{this.props.dna.animation}</span>
          <span id="dnaspecial">{this.props.dna.lastNum}</span>
        </b>
      </div>
    );
  }
}

export default dnaBadge;
