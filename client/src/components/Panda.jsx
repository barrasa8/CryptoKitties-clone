import React, { Component } from "react";
import { StyledPanda } from '../assets/sc/StyledPanda';
import '../assets/css/panda.css'
import '../assets/css/animations.css'


// const mouthId = mouthShapes[this.props.dna.mouthShape]
// let earsVariation = mouthId.search('Normal') >=0 ? "a-mouth" : "";

class Panda extends Component {
  render() {
    return (
      
      <StyledPanda dna={this.props.dna}>
        {/* {console.log(this.props.animations)} */}
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
            <div className={`a-left-ear ${this.props.animations==="Head" ? "headLeftEarMove":""}`} id="lEar">
              <div className="a-left-inner-ear"></div>
            </div>
            <div className={`a-right-ear  ${this.props.animations==="Head" ? "headRightEarMove":""}`}  id="rEar">
              <div className="a-right-inner-ear"></div>
            </div>
          </div>
          <div className={`a-head ${this.props.animations==="Head" ? "headMove":""}`} id="head">
            <div className="a-eyes">
              <div className="a-left-eye-patch">
                <div className={`a-left-eye a-left-eye-${this.props.eyeShape}`} id="lEye">
                  <div className={`a-left-pupil a-left-pupil-${this.props.eyeShape}`} id="lPupil">
                    <div className="a-left-pupil-spark"></div>
                  </div>
                </div>
              </div>
              <div className="a-right-eye-patch">
                <div className={`a-right-eye a-right-eye-${this.props.eyeShape}`} id="rEye">
                  <div
                    className={`a-right-pupil a-right-pupil-${this.props.eyeShape}`}
                    id="rPupil"
                  >
                    <div className="a-right-pupil-spark"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`a-nose ${this.props.animations==="Nose" ? "noseMove":""}`} id="nose"></div>
            <div className={`a-mouth a-mouth-${this.props.mouthShape}`} id="mouth"></div>
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
            <div  className={`a-left-foot ${(this.props.animations==="Left-Foot" || this.props.animations==="Both-Feet") ? "leftFootMove":""}`} id="lFoot"></div>
            <div  className={`a-left-toes a-left-toe-1 ${(this.props.animations==="Left-Foot" || this.props.animations==="Both-Feet") ? "leftFootToe1Move":""}`} id="lFootToe1"></div>
            <div  className={`a-left-toes a-left-toe-2 ${(this.props.animations==="Left-Foot" || this.props.animations==="Both-Feet") ? "leftFootToe2Move":""}`} id="lFootToe2"></div>
            <div  className={`a-left-toes a-left-toe-3 ${(this.props.animations==="Left-Foot" || this.props.animations==="Both-Feet") ? "leftFootToe3Move":""}`} id="lFootToe3"></div>
            <div  className={`a-left-heel ${(this.props.animations==="Left-Foot" || this.props.animations==="Both-Feet") ? "leftHeelMove":""}`} id="lFootH`el"></div>
            <div  className="a-right-leg"></div>
            <div  className={`a-right-foot ${(this.props.animations==="Right-Foot" || this.props.animations==="Both-Feet") ? "rightFootMove":""}`} id="rFoot"></div>
            <div  className={`a-right-toes a-right-toe-1 ${(this.props.animations==="Right-Foot" || this.props.animations==="Both-Feet") ? "rightFootToe1Move":""}`} id="rFootToe1"></div>
            <div  className={`a-right-toes a-right-toe-2 ${(this.props.animations==="Right-Foot" || this.props.animations==="Both-Feet") ? "rightFootToe2Move":""}`} id="rFootToe2"></div>
            <div  className={`a-right-toes a-right-toe-3 ${(this.props.animations==="Right-Foot" || this.props.animations==="Both-Feet") ? "rightFootToe3Move":""}`} id="rFootToe3"></div>
            <div  className={`a-right-heel ${(this.props.animations==="Right-Foot" || this.props.animations==="Both-Feet") ? "rightHeelMove":""}`} id="rFootHeel"></div>
          </div>
        </div>
        <br />
      </StyledPanda>
    );
  }
}

export default Panda;
