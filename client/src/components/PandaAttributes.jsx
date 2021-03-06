import React, { Component } from "react";
import { Tab, Nav } from "react-bootstrap";
import "../assets/css/PandaAttributes.css";

class PandaAttributes extends Component {

  HandleSliderChange = ({ target }) => {
    this.props.SliderChange(target.name, target.value);
  };

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
                <label>
                  <b>Arm and legs</b>
                  <span
                    className="badge badge-dark ml-2"
                    id="armlegcode"
                  >{this.props.dna.dnaarmleg}</span>
                </label>
                <input
                  name="dnaarmleg"
                  value={this.props.dna.dnaarmleg}
                  type="range"
                  min="10"
                  max="98"
                  className="form-control-range"
                  id="armlegcolor"
                  onChange={this.HandleSliderChange.bind(this)}
                />
                <br />
                <label>
                  <b>Eye patches</b>
                  <span
                    className="badge badge-dark ml-2"
                    id="eyepatchcode"
                  >{this.props.dna.dnaeyepatch}</span>
                </label>
                <input
                  name="dnaeyepatch"
                  value={this.props.dna.dnaeyepatch}
                  type="range"
                  min="10"
                  max="98"
                  className="form-control-range"
                  id="eyepatchcolor"
                  onChange={this.HandleSliderChange.bind(this)}
                />
                <br />
                <label>
                  <b>Inner ear, foot and nose</b>
                  <span
                    className="badge badge-dark ml-2"
                    id="innerearfootcode"
                  >{this.props.dna.dnainnerearfoot}</span>
                </label>
                <input
                  name="dnainnerearfoot"
                  value={this.props.dna.dnainnerearfoot}
                  type="range"
                  min="10"
                  max="98"
                  className="form-control-range"
                  id="innerearfootcolor"
                  onChange={this.HandleSliderChange.bind(this)}
                />
                <br />
                <label>
                  <b>Head and body</b>
                  <span
                    className="badge badge-dark ml-2"
                    id="headbodycode"
                  >{this.props.dna.dnaheadbody}</span>
                </label>
                <input
                  name="dnaheadbody"
                  value={this.props.dna.dnaheadbody}
                  type="range"
                  min="10"
                  max="98"
                  className="form-control-range"
                  id="headbodycodecolor"
                  onChange={this.HandleSliderChange.bind(this)}
                />
                <br />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="panda-attributes">
              <div className="form-group">
                <label>
                  <b>Eye Shape</b>
                  <span
                    className="badge badge-dark ml-2"
                    id="eyeshapename"
                  >{this.props.eyeShapeName}</span>
                </label>
                <input
                  name="dnaeyeshape"
                  value={this.props.dna.dnaeyeshape}
                  type="range"
                  min="1"
                  max="4"
                  className="form-control-range"
                  id="eyeshape"
                  onChange={this.HandleSliderChange.bind(this)}
                />
                <br />
                <label>
                  <b>Mouth Shape</b>
                  <span
                    className="badge badge-dark ml-2"
                    id="mouthshapename"
                  >{this.props.mouthShapeName}</span>
                </label>
                <input
                  name="dnamouthshape"
                  value={this.props.dna.dnamouthshape}
                  type="range"
                  min="1"
                  max="4"
                  className="form-control-range"
                  id="mouthshape"
                  onChange={this.HandleSliderChange.bind(this)}
                />
                <br />
                <label>
                  <b>Pattern Decoration</b>
                </label>
                <div className="row">
                  <div className="col-lg-5">
                    <label>
                      <b>Middle</b>
                      <span
                        className="badge badge-dark ml-2"
                        id="middledecorationcode"
                      >{this.props.dna.decorationMidcolor}</span>
                    </label>
                    <input
                      name="decorationMidcolor"
                      value={this.props.dna.decorationMidcolor}
                      type="range"
                      min="10"
                      max="98"
                      className="form-control-range"
                      id="middledecorationcolor"
                      onChange={this.HandleSliderChange.bind(this)}
                    />
                  </div>
                  <div className="col-lg-5">
                    <label>
                      <b>Sides</b>
                      <span
                        className="badge badge-dark ml-2"
                        id="outterdecorationcode"
                      >{this.props.dna.decorationSidescolor}</span>
                    </label>
                    <input
                      name="decorationSidescolor"
                      value={this.props.dna.decorationSidescolor}
                      type="range"
                      min="10"
                      max="98"
                      className="form-control-range"
                      id="outterdecorationcolor"
                      onChange={this.HandleSliderChange.bind(this)}
                    />
                  </div>
                </div>
                <br />
                <label>
                  <b>Animation</b>
                  <span
                    className="badge badge-dark ml-2"
                    id="animationname"
                  >{this.props.animationName}</span>
                </label>
                <input
                  name="animation"
                  value={this.props.dna.animation}
                  type="range"
                  min="1"
                  max="6"
                  className="form-control-range"
                  id="animationnumber"
                  onChange={this.HandleSliderChange.bind(this)}
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
