import React, { Component } from "react";
import { Tab, Nav } from "react-bootstrap";
import "./PandaAttributes.css";

class PandaAttributes extends Component {
  constructor(props) {
    super(props);
  }

  HandleSliderChange = ({ target }) => {
    console.log(target.value);

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
                  ></span>
                </label>
                <input
                  name="dnaarmleg"
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
                  ></span>
                </label>
                <input
                  name="dnaeyepatch"
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
                  ></span>
                </label>
                <input
                  name="dnainnerearfoot"
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
                  ></span>
                </label>
                <input
                  name="dnaheadbody"
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
                  ></span>
                </label>
                <input
                  name="dnaeyeshape"
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
                  ></span>
                </label>
                <input
                  name="dnamouthshape"
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
                      ></span>
                    </label>
                    <input
                      name="decorationMidcolor"
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
                      ></span>
                    </label>
                    <input
                      name="decorationSidescolor"
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
                  ></span>
                </label>
                <input
                  name="animation"
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
