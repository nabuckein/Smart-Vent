import React, { Component } from 'react';
var Particle = require('particle-api-js');

class RoomSettings extends Component{

	constructor(props){ 
    	super(props);   

    	this.particle = new Particle();
      	this.token;
        this.particle.login({username: 'pauri@hotmail.com', password: 'Nabuckein1984'}).then(
	        (data)=>{
	          this.token = data.body.access_token;
	          console.log(data.statusCode + "token = " + this.token);
	          //document.getElementById('loginResponse').innerHTML = data.body.access_token;    
	        },
	        function(err) {
	          //document.getElementById('loginResponse').innerHTML = 'API call completed on promise fail: ' + err;
	          console.log('API call completed on promise fail: ', err);
	        }
        );

    		

	}

	rotateToOpen=(e)=>{
		this.particle.callFunction({deviceId: '42004b001051353532343635', name: 'rotateOpen' ,argument: '', auth: this.token}).then(
  function(data) {
    console.log('Function called succesfully:', data);
  }, function(err) {
    console.log('An error occurred:', err);
  });
		console.log("rotateToOpen clicked!");
	}
	rotateToClose=(e)=>{
		this.particle.callFunction({deviceId: '42004b001051353532343635', name: 'rotateClose' ,argument: '', auth: this.token});
		console.log("rotateToClose clicked!");
	}

	render(){
		return(
			<div className="RoomSettings" style={styles.RoomSettings}>
			<video style={styles.backgroundVideo} id="background-video" loop autoPlay>
		      <source src="media/video/backgroundRotatingBlueHouse.mov" type="video/mp4" />
		      <source src="media/video/backgroundVideo.mp4" type="video/ogg" />
		      <source src="media/video/backgroundVideo.webm" type="video/webm" />
		      Your browser does not support the video tag.
		    </video>
				<p className="roomsSettingsTitle">Room Settings</p>
				<div className="buttonsDiv">
				  <button className="buttons" onClick={this.rotateToOpen} style={styles.buttonsText}>OPEN VENTS</button>
	              <button className="buttons" onClick={this.rotateToClose} style={styles.buttonsText}>CLOSE VENTS</button>
	              <button className="buttons" onClick={this.props.toRoomOverview} style={styles.buttonsText}>CANCEL</button>
	            </div>
			</div>
		);
		
	}

}

export default RoomSettings;

const styles = {
	RoomSettings:{
		fontSize:'35px',
		textAlign:'center',
		width:'100%'
	},
	buttonsDiv:{
		width:'100%'
	},
	buttonsText:{
		fontSize: '25px',
		width:'100%'
	},
	backgroundVideo:{
		position: 'fixed',
	    top: '50%',
	    left: '50%',
	    minWidth: '100%',
	    minWeight: '100%',
	    width: 'auto',
	    height: 'auto',
	    zIndex: '-100',
	    transform: 'translate(-50%, -50%)'

	}
}