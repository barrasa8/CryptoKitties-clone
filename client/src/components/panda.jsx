import React, { Component } from "react";
import "./panda.css";
import {allColors} from "../assets/js/colors"

import styled from 'styled-components'

const colors= allColors();
{console.log("this is colors "+ JSON.stringify(colors))}
// Styles
const InnerEFN= styled.div`
background:#${props => props.color ? colors[props.color] : "white"};
`
const EyePatch= styled.div`
background:#${props => props.color ? colors[props.color] : "white"};
`
const ArmLegs= styled.div`
background:#${props => props.color ? colors[props.color] : "white"};
`
const HeadBody= styled.div`
background:#${props => props.color ? colors[props.color] : "white"};
`


class panda extends Component {
  
  constructor(props) {
    super(props);
  }
    

// armLegsColor(color,code) {
//     $('.a-left-leg,.a-right-leg,.a-left-foot,.a-right-foot,.a-left-arm,.a-right-arm,.a-arms')
//     .css('background', '#' + color)  //This changes the color of the animal
//     $('#armlegcode').html('code: '+code) //This updates text of the badge next to the slider
//     $('#dnaarmleg').html(code) //This updates the body color part of the DNA that is displayed below the animal
//   }

  // renderPanda(dna){
  //   armLegsColor(colors[this.props.dnadnaarmleg],this.props.dnadnaarmleg)
  //   $('#armlegcolor').val(this.props.dnadnaarmleg)
    // eyePatchColor(colors[this.props.dnadnaeyepatch],this.props.dnadnaeyepatch)
    // $('#eyepatchcolor').val(this.props.dnadnaeyepatch)
    // innerEarFootColor(colors[this.props.dnadnainnerearfoot],this.props.dnadnainnerearfoot)
    // $('#innerearfootcolor').val(this.props.dnadnainnerearfoot)
    // headBodyColor(colors[this.props.dnadnaheadbody],this.props.dnadnaheadbody)
    // $('#headbodycodecolor').val(this.props.dnadnaheadbody)
    // eyeShape(this.props.dnadnaeyeshape)
    // $('#eyeshape').val(this.props.dnadnaeyeshape)
    // mouthShape(this.props.dnadnamouthshape)
    // $('#mouthshape').val(this.props.dnadnamouthshape) 
    // decorationMidColor(colors[this.props.dnadecorationMidcolor],this.props.dnadecorationMidcolor)
    // $('#middledecorationcolor').val(this.props.dnadecorationMidcolor)  
    // decorationOutterColor(colors[this.props.dnadecorationSidescolor],this.props.dnadecorationSidescolor)
    // $('#outterdecorationcolor').val(this.props.dnadecorationSidescolor) 
    // animation(this.props.dnaanimation)
    // $('#animationnumber').val(this.props.dnaanimation) 
  // }

  

  render() {
    return (
      <>
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
            <HeadBody color={this.props.dna.dnaheadbody} className="a-left-ear" id="lEar">
              <InnerEFN color={this.props.dna.dnainnerearfoot}  className="a-left-inner-ear"></InnerEFN>
            </HeadBody>
            <HeadBody color={this.props.dna.dnaheadbody} className="a-right-ear" id="rEar">
              <InnerEFN color={this.props.dna.dnainnerearfoot} className="a-right-inner-ear"></InnerEFN>
            </HeadBody>
          </div>
          <HeadBody color={this.props.dna.dnaheadbody} className="a-head" id="head">
            <div className="a-eyes">
              <EyePatch color={this.props.dna.dnaeyepatch} className="a-left-eye-patch">
                <div className="a-left-eye" id="lEye">
                  <div className="a-left-pupil a-left-pupil-normal" id="lPupil">
                    <div className="a-left-pupil-spark"></div>
                  </div>
                </div>
              </EyePatch>
              <EyePatch color={this.props.dna.dnaeyepatch} className="a-right-eye-patch">
                <div className="a-right-eye" id="rEye">
                  <div
                    className="a-right-pupil a-right-pupil-normal"
                    id="rPupil"
                  >
                    <div className="a-right-pupil-spark"></div>
                  </div>
                </div>
              </EyePatch>
            </div>
            <InnerEFN color={this.props.dna.dnainnerearfoot} className="a-nose" id="nose"></InnerEFN>
            <div className="a-mouth" id="mouth"></div>
          </HeadBody>
          <ArmLegs color={this.props.dna.dnaarmleg} className="a-arms">
            <div className="a-ring-left"></div>
            <div className="a-ring-middle"></div>
            <div className="a-ring-right"></div>
            <ArmLegs color={this.props.dna.dnaarmleg} className="a-left-arm"></ArmLegs>
            <ArmLegs color={this.props.dna.dnaarmleg} className="a-right-arm"></ArmLegs>
          </ArmLegs>
          <HeadBody color={this.props.dna.dnaheadbody} className="a-body"></HeadBody>
          <div className="a-legs">
            <ArmLegs color={this.props.dna.dnaarmleg} className="a-left-leg"></ArmLegs>
            <ArmLegs color={this.props.dna.dnaarmleg} className="a-left-foot" id="lFoot"></ArmLegs>
            <InnerEFN color={this.props.dna.dnainnerearfoot} className="a-left-toes a-left-toe-1" id="lFootToe1"></InnerEFN>
            <InnerEFN color={this.props.dna.dnainnerearfoot} className="a-left-toes a-left-toe-2" id="lFootToe2"></InnerEFN>
            <InnerEFN color={this.props.dna.dnainnerearfoot} className="a-left-toes a-left-toe-3" id="lFootToe3"></InnerEFN>
            <InnerEFN color={this.props.dna.dnainnerearfoot} className="a-left-heel" id="lFootHeel"></InnerEFN>
            <ArmLegs color={this.props.dna.dnaarmleg} className="a-right-leg"></ArmLegs>
            <ArmLegs color={this.props.dna.dnaarmleg} className="a-right-foot" id="rFoot"></ArmLegs>
            <InnerEFN color={this.props.dna.dnainnerearfoot} className="a-right-toes a-right-toe-1" id="rFootToe1"></InnerEFN>
            <InnerEFN color={this.props.dna.dnainnerearfoot} className="a-right-toes a-right-toe-2" id="rFootToe2"></InnerEFN>
            <InnerEFN color={this.props.dna.dnainnerearfoot} className="a-right-toes a-right-toe-3" id="rFootToe3"></InnerEFN>
            <InnerEFN color={this.props.dna.dnainnerearfoot} className="a-right-heel" id="rFootHeel"></InnerEFN>
          </div>
        </div>
        <br />
        
      </>
    );
  }
}

export default panda;
