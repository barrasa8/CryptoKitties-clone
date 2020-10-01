import React, { Component } from 'react';

class defaulPandaButton extends Component {
    state = {  }

    // setDefaultPandaDna = ()=>{
    //     this.setState({
    //         dnaarmleg : 51,
    //         dnaeyepatch : 53,
    //         dnainnerearfoot : 54,
    //         dnaheadbody : 10,
    //         //Pandatributes
    //         dnaeyeshape : 1,
    //         dnamouthshape : 1,
    //         decorationMidcolor : 19,
    //         decorationSidescolor : 8,
    //         animation :  1,
    //         lastNum :  1
    //     });
    // };

    render() { 
        return (  
            <button type="button" className="btn btn-success" id="default-panda-button" onClick={this.setDefaultPandaDna}>Default Panda</button>
        );
    }
}
 
export default defaulPandaButton;