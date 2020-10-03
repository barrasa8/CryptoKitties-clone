import React, { Component } from "react";
import { StyledPanda } from '../assets/sc/StyledPanda';

class Panda extends Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <StyledPanda dna={this.props.dna}>
      {console.log(JSON.stringify("_Rendering panda again"+JSON.stringify(this.props.dna)))}
        <div className="a-container">
          <div className="a-bamboos">
            <div className="a-bamboo-stick a-bamboo-stick-1">
              <div className="a-bamboo-divider"></div>
              <div className="a-bamboo-divider"></div>
              <div className="a-bamboo-divider"></div>
              <div className="a-bamboo-divider"></div>
              <div className="a-bamboo-divider"></div>
            </div>
            <div className="a-bamboo-stick a-bamboo-stick-2">
              <div className="a-bamboo-divider"></div>
              <div className="a-bamboo-divider"></div>
              <div className="a-bamboo-divider"></div>
              <div className="a-bamboo-divider"></div>
              <div className="a-bamboo-divider"></div>
            </div>
            <div className="a-bamboo-stick a-bamboo-stick-3">
              <div className="a-bamboo-divider"></div>
              <div className="a-bamboo-divider"></div>
              <div className="a-bamboo-divider"></div>
              <div className="a-bamboo-divider"></div>
              <div className="a-bamboo-divider"></div>
            </div>
          </div>
          <div className="a-ears">
            <div className="a-left-ear" id="lEar">
              <div className="a-left-inner-ear"></div>
            </div>
            <div className="a-right-ear" id="rEar">
              <div className="a-right-inner-ear"></div>
            </div>
          </div>
          <div className="a-head" id="head">
            <div className="a-eyes">
              <div className="a-left-eye-patch">
                <div className="a-left-eye" id="lEye">
                  <div className="a-left-pupil a-left-pupil-normal" id="lPupil">
                    <div className="a-left-pupil-spark"></div>
                  </div>
                </div>
              </div>
              <div className="a-right-eye-patch">
                <div className="a-right-eye" id="rEye">
                  <div
                    className="a-right-pupil a-right-pupil-normal"
                    id="rPupil"
                  >
                    <div className="a-right-pupil-spark"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="a-nose" id="nose"></div>
            <div className="a-mouth" id="mouth"></div>
          </div>
          <div className="a-arms">
            <div className="a-ring-left"></div>
            <div className="a-ring-middle"></div>
            <div className="a-ring-right"></div>
            <div className="a-left-arm"></div>
            <div className="a-right-arm"></div>
          </div>
          <div  className="a-body"></div>
          <div className="a-legs">
            <div  className="a-left-leg"></div>
            <div  className="a-left-foot" id="lFoot"></div>
            <div  className="a-left-toes a-left-toe-1" id="lFootToe1"></div>
            <div  className="a-left-toes a-left-toe-2" id="lFootToe2"></div>
            <div  className="a-left-toes a-left-toe-3" id="lFootToe3"></div>
            <div  className="a-left-heel" id="lFootHeel"></div>
            <div  className="a-right-leg"></div>
            <div  className="a-right-foot" id="rFoot"></div>
            <div  className="a-right-toes a-right-toe-1" id="rFootToe1"></div>
            <div  className="a-right-toes a-right-toe-2" id="rFootToe2"></div>
            <div  className="a-right-toes a-right-toe-3" id="rFootToe3"></div>
            <div  className="a-right-heel" id="rFootHeel"></div>
          </div>
        </div>
        <br />
      </StyledPanda>
    );
  }
}

export default Panda;
