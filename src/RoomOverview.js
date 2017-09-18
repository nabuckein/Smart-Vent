import React, { Component } from 'react';

import './css/roomoverview.css';
  

var firebase = require("firebase");
  
class RoomOverview extends Component {  

 	constructor(props){ 
    super(props);   

	    this.user = firebase.auth().currentUser;
	    this.amountOfRooms;
	    this.state = {
	      amountOfRooms:0,
	    }
    
  	}

  	componentWillMount=(e)=>{
	    firebase.database().ref('Users/' + this.user.displayName + '/amountOfRooms').on('value',(snapshot)=> {
	      this.amountOfRooms = snapshot.val();
	      // ...
	    });
  	}

  	handleRemoveRoom=(e)=>{
  		//this.amountOfRooms--;
	    //firebase.database().ref('Users/' + this.user.displayName + '/amountOfRooms').set(this.amountOfRooms);
	    var rooms;
	    firebase.database().ref('Users/' + this.user.displayName + '/rooms/' + this.props.title).remove();
	    
  	}	
  	

  render() {

    return (
      <div className="RoomOverview">    
        <div className="rooms">
            <p className="roomsName">{this.props.title}</p>
            <p className="roomsTemp">72</p>    
            <i className="fa fa-sliders" aria-hidden="true" onClick={this.props.toRoomSettings}></i>
            <i className="fa fa-bar-chart" aria-hidden="true"></i>
			<i className="fa fa-trash" aria-hidden="true" onClick={this.handleRemoveRoom} ></i>
        </div>            
      </div>
    );
  }
}

export default RoomOverview;
