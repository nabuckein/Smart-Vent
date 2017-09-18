import React, { Component } from 'react';
import './css/roomsetup.css';  

//var firebase = require("firebase");


class RoomSetup extends Component {  

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
        <div className="RoomSetup">   
            
            <p className="roomSetupTitle">Please complete the initial setup:</p>         
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
              <button className="doneRoomSetupButton buttons" onClick={this.props.saveRoomInfoAndShowRooms}>DONE</button>
              <button className="cancelRoomSetupButton buttons" onClick={this.props.cancel}>CANCEL</button>
            </div>
        </div>
    );
  }
}

export default RoomSetup;
