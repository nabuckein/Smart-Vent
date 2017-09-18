import React, { Component } from 'react';
//import './roomsettings.css';
import * as firebase from "firebase";

class RoomSettings extends Component{





	render(){
		return(
			<div className="RoomSettings">
				<p className="roomsSettingsTitle">Room Settings</p>
				<div className="buttonsDiv">
	              <button className="buttons" onClick={this.props.toRoomOverview}>DONE</button>
	              <button className="buttons" onClick={this.props.toRoomOverview}>CANCEL</button>
	            </div>
			</div>
		);
		
	}

}

export default RoomSettings;