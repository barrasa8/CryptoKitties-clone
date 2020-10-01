import React, { Component } from "react";
import { Tab , Nav} from "react-bootstrap";
import  "./pandaattributes.css"



class PandaAttributes extends Component {
  constructor(props) {
    super(props);
  }
  
  handleChange= ({target})=>{
    console.log(target.value)

    const _dna =  {
      dnaarmleg: target.value,
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
    }

    this.props.changeFunction(target.name,target.value)
  }

  render() {
    return (
      <div className="col-lg-4 pandattributes m-1 light-b-shadow">
        <Tab.Container
          id="panda-attributes-tabs"
          defaultActiveKey="panda-colors"
        >
          <Nav variant="pills" className="flex-row">
            <Nav.Item>
              <Nav.Link eventKey="panda-colors">Colors</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="panda-attributes">Attributes</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="panda-colors">
              <div className="form-group">
                <label >
                  <b>Arm and legs</b>
                  <span
                    className="badge badge-dark ml-2"
                    id="armlegcode"
                  ></span>
                </label>
                <input
                  name="dnaarmleg"
                  type="range"
                  min="10"
                  max="98"
                  className="form-control-range"
                  id="armlegcolor"
                  onChange={this.handleChange.bind(this)}
                />
                <br />
                <label >
                  <b>Eye patches</b>
                  <span
                    className="badge badge-dark ml-2"
                    id="eyepatchcode"
                  ></span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="98"
                  className="form-control-range"
                  id="eyepatchcolor"
                />
                <br />
                <label >
                  <b>Inner ear, foot and nose</b>
                  <span
                    className="badge badge-dark ml-2"
                    id="innerearfootcode"
                  ></span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="98"
                  className="form-control-range"
                  id="innerearfootcolor"
                />
                <br />
                <label >
                  <b>Head and body</b>
                  <span
                    className="badge badge-dark ml-2"
                    id="headbodycode"
                  ></span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="98"
                  className="form-control-range"
                  id="headbodycodecolor"
                />
                <br />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="panda-attributes">
              <div className="form-group">
                <label >
                  <b>Eye Shape</b>
                  <span
                    className="badge badge-dark ml-2"
                    id="eyeshapename"
                  ></span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="4"
                  className="form-control-range"
                  id="eyeshape"
                />
                <br />
                <label >
                  <b>Mouth Shape</b>
                  <span
                    className="badge badge-dark ml-2"
                    id="mouthshapename"
                  ></span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="4"
                  className="form-control-range"
                  id="mouthshape"
                />
                <br />
                <label >
                  <b>Pattern Decoration</b>
                </label>
                <div className="row">
                  <div className="col-lg-5">
                    <label >
                      <b>Middle</b>
                      <span
                        className="badge badge-dark ml-2"
                        id="middledecorationcode"
                      ></span>
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="98"
                      className="form-control-range"
                      id="middledecorationcolor"
                    />
                  </div>
                  <div className="col-lg-5">
                    <label >
                      <b>Sides</b>
                      <span
                        className="badge badge-dark ml-2"
                        id="outterdecorationcode"
                      ></span>
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="98"
                      className="form-control-range"
                      id="outterdecorationcolor"
                    />
                  </div>
                </div>
                <br />
                <label >
                  <b>Animation</b>
                  <span
                    className="badge badge-dark ml-2"
                    id="animationname"
                  ></span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="6"
                  className="form-control-range"
                  id="animationnumber"
                />
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    );
  }
}

export default PandaAttributes;
