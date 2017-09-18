import React, { Component } from 'react';
import './css/initialsetup.css';  

//var firebase = require("firebase");


class InitialSetup extends Component {  

  /*constructor(props){ 
    super(props);   

   

    this.user = firebase.auth().currentUser;
    this.state = {
      amountOfRooms:0,
    }
    
  }
*/


  

  render() {
    return (
        <div className="InitialSetup">   
            
            <p className="initialSetupTitle">Please complete the initial setup:</p>         
            <div className="inputFieldsAndLabels">
              <div className="inputsAndLabelsRows">
                <label className="setupLabels" id="nameForRoomLabel">Name for this room:</label>
                <input className="setupInputFields" id="nameForRoomInput"></input>
              </div>
              
              <div className="inputsAndLabelsRows">
                <label className="setupLabels" id="amountOfVentsLabel">Number of vents in this room:</label>
                <input className="setupInputFields" id="amountOfVentsInput"></input>
              </div>
            </div>
            <div className="buttonsDiv">
              <button className="doneInitialSetupButton buttons" onClick={this.props.saveRoomInfoAndShowRooms}>DONE</button>
              <button className="cancelInitialSetupButton buttons" onClick={this.props.back}>CANCEL</button>
            </div>
        </div>
    );
  }
}

export default InitialSetup;
