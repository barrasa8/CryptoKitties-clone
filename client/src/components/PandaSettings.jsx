import React, { Component } from "react";

import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";

import PandaCard from "./PandaCard";
import PandaAttributes from "./PandaAttributes";

import { allEyeVariations } from "../assets/js/shapes";
import { allMouthVariations } from "../assets/js/shapes";
import { allAnimations } from "../assets/js/animations";

const eyeShapes = allEyeVariations();
const mouthShapes = allMouthVariations();
const animations = allAnimations();

const defaultDna = {
  dna: {
    dnaarmleg: 51,
    dnaeyepatch: 53,
    dnainnerearfoot: 54,
    dnaheadbody: 10,
    //Pandatributes
    dnaeyeshape: 1,
    dnamouthshape: 1,
    decorationMidcolor: 19,
    decorationSidescolor: 8,
    animation: 1,
    lastNum: 9,
  },
};

class PandaSettings extends Component {
  constructor() {
    super();
    this.state = {
      dna: {
        dnaarmleg: 51,
        dnaeyepatch: 53,
        dnainnerearfoot: 54,
        dnaheadbody: 10,
        //Pandatributes
        dnaeyeshape: 1,
        dnamouthshape: 1,
        decorationMidcolor: 19,
        decorationSidescolor: 8,
        animation: 1,
        lastNum: 9,
      },
    };
  }

  getDna = ()=>{
      var dna = ''
      dna += this.state.dna.dnaarmleg;
      dna += this.state.dna.dnaeyepatch;
      dna += this.state.dna.dnainnerearfoot;
      dna += this.state.dna.dnaheadbody;
      dna += this.state.dna.dnaeyeshape;
      dna += this.state.dna.dnamouthshape;
      dna += this.state.dna.decorationMidcolor;
      dna += this.state.dna.decorationSidescolor;
      dna += this.state.dna.animation;
      dna += this.state.dna.lastNum;

      return parseInt(dna)
  }
  

  createPandaGen0 = ()=>  (  
    // this.props.contract.methods.createPandaGen0(this.getDna()).send({from: this.props.accounts[0]})
    console.log(this.props.accounts[0] )
    );

//   eventBirth = () =>{
//     this.props.contract.events.Birth({},(error,event)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log(event); 
//         console.log(event.returnValues.genes)
//         // $("#panda-created-message").css("background","rgba(0, 163, 0, 0.3)");
//         // $("#panda-created-message").html("Your Panda is Alive: Owner:"+event.returnValues._owner+", ID:"+event.returnValues.PandaId+" , Genes:"+event.returnValues.genes 
//         // +", MumID:"+ event.returnValues.mumId+", DadID:"+ event.returnValues.dadId )

//         console.log(this.props.contract.methods.getPandaArray(this.props.accounts[0]).call());
//     } 
//     })
// }


  setDefaultPandaDna = () => {
    this.setState({
      dna: defaultDna.dna,
    });
    // console.log(JSON.stringify(this.state.dna))
  };

  SliderChange = (_dnaProperty, _dna) => {
    this.setState((prevState) => ({
      dna: {
        ...prevState.dna,
        [_dnaProperty]: _dna,
      },
    }));
  };

  randomPanda = () => {  
        this.setState(prevState => {
          let dna =  Object.assign({},prevState.dna)

          dna.dnaarmleg = Math.floor(Math.random()*89)+10;
          dna.dnaeyepatch = Math.floor(Math.random()*89)+10;
          dna.dnainnerearfoot = Math.floor(Math.random()*89)+10;
          dna.dnaheadbody = Math.floor(Math.random()*89)+10;
          //Pandatributes
          dna.dnaeyeshape = Math.floor(Math.random()*4)+1;
          dna.dnamouthshape = Math.floor(Math.random()*4)+1;
          dna.decorationMidcolor = Math.floor(Math.random()*89)+10;
          dna.decorationSidescolor = Math.floor(Math.random()*89)+10;
          dna.animation =  Math.floor(Math.random()*6)+1;
          dna.lastNum =  1;

          return {dna}
        });
  };

  render() {
    return (
      <Container fluid>
        <Row className="justify-content-md-center">
          <PandaCard dna={this.state.dna} />
          <PandaAttributes
            dna={this.state.dna}
            SliderChange={this.SliderChange}
            mouthShapeName={mouthShapes[this.state.dna.dnamouthshape]}
            eyeShapeName={eyeShapes[this.state.dna.dnaeyeshape]}
            animationName={animations[this.state.dna.animation]}
          />
        </Row>
        <br />
        <Row>
          <Col md={{ span: 2 ,offset:2}}>
            <button
              type="button"
              className="btn btn-success"
              id="default-panda-button"
              onClick={this.setDefaultPandaDna}
            >
              Default Panda
            </button>

          </Col>
          <Col md={{ span: 2 }}>
            <button
                type="button"
                className="btn btn-success"
                id="random-panda-button"
                onClick={this.randomPanda}
              >
                Random Panda
              </button>
          </Col>
          <Col md={{ span: 2, offset: 2 }}>
          <button
              type="button"
              className="btn btn-danger"
              id="random-panda-button"
              onClick={this.createPandaGen0}
            >
              Create Panda
            </button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PandaSettings;
