import React, { Component } from 'react';

import './css/addroom.css';

//var firebase = require("firebase");
  
class AddRoom extends Component {  

  /*constructor(props){ 
    super(props);   

    this.user = firebase.auth().currentUser;
    this.amountOfRooms;
    this.state = {
      amountOfRooms:0,
    }
    
  }*/


 
  render() {

    return (
      <div className="AddRoom">    
        <div className="addRoomsDiv">
            <p className="addRoomTitle">Add a room</p>
            <i className="fa fa-plus-circle" aria-hidden="true" onClick={this.props.showRoomSetup}></i>

        </div>            
      </div>
    );
  }
}

export default AddRoom;