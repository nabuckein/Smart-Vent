import React, { Component } from 'react';
import RoomOverview from './RoomOverview';
import AddRoom from './AddRoom';
import RoomSetup from './RoomSetup';
import RoomSettings from './RoomSettings';
import './css/readings.css';

var firebase = require("firebase");



class Readings extends Component {

  constructor(props){
    super(props);   

    this.user = firebase.auth().currentUser;
    this.rooms = null;
    this.amountOfRooms;

    this.state={
      amountOfRooms:0,
      componentToDisplay:'rooms',
      rooms:null
    }

  }

  componentWillMount=(e)=>{
    var currentUser = firebase.auth().currentUser;
    var roomsObj = null;
    firebase.database().ref('Users/' + currentUser.displayName + '/amountOfRooms').on('value',(snapshot)=> {
      this.setState({amountOfRooms : snapshot.val()})
      // ...
    });
    firebase.database().ref('Users/' + currentUser.displayName).on('value',(snapshot)=> {
      this.setState({rooms:snapshot.val().rooms});
      // ...
    });

    
    
  }

  componentWillUpdate=(e)=>{

    
  }

  toRoomOverview=(e)=>{
    this.setState({componentToDisplay:'rooms'});
  }

  toRoomSetup=(e)=>{
    this.setState({componentToDisplay:'initialsetup'});
  }
  toRoomSettings=(e)=>{
    this.setState({componentToDisplay:'roomsettings'});
  }
  saveRoomInfoAndShowRooms=(e)=>{

    var roomTitle = document.getElementById('nameForRoomInput').value;
    var amountOfVents = document.getElementById('amountOfVentsInput').value;

    if(this.state.amountOfRooms>0){
      if(roomTitle !== "" && amountOfVents !== ""){
        firebase.database().ref('Users/' + this.user.displayName + '/rooms/' + roomTitle).update({AmountOfVents:amountOfVents, Temperature:0});

        firebase.database().ref('Users/' + this.user.displayName + '/amountOfRooms').set(this.state.amountOfRooms+1);

        this.setState({componentToDisplay:'rooms', amountOfRooms:this.state.amountOfRooms+1});
      }
    }else{
      if(roomTitle !== "" && amountOfVents !== ""){

        firebase.database().ref('Users/' + this.user.displayName + '/rooms').set(roomTitle);

        firebase.database().ref('Users/' + this.user.displayName + '/rooms/' + roomTitle + '/AmountOfVents').set(amountOfVents);
        
        firebase.database().ref('Users/' + this.user.displayName + '/rooms/' + roomTitle + '/Temperature').set(0);

        firebase.database().ref('Users/' + this.user.displayName + '/amountOfRooms').set(this.state.amountOfRooms+1);

        this.setState({componentToDisplay:'rooms', amountOfRooms:this.state.amountOfRooms+1});
      }
    }
  }
  
  render() {
    var roomsArr = [];
    if(this.state.componentToDisplay === 'rooms'){
      
      for(var n in this.state.rooms){
        //console.log(this.state.rooms[n].Name);
        roomsArr.push(<RoomOverview title={n} toRoomSettings={this.toRoomSettings}/>);
      }
      roomsArr.push(<AddRoom showRoomSetup={this.toRoomSetup} />);
    }else if(this.state.componentToDisplay === 'initialsetup'){
      roomsArr.push(<RoomSetup saveRoomInfoAndShowRooms={this.saveRoomInfoAndShowRooms} cancel={this.toRoomOverview}/>);
    }else if(this.state.componentToDisplay === 'roomsettings'){
      roomsArr.push(<RoomSettings toRoomOverview={this.toRoomOverview}/>);
    }

    return (
      <div className="Readings">
        <div className="roomsDiv">

          {roomsArr}          


        </div>
    </div>
    );
  }
}

export default Readings;


/*
<div className="rooms" id="room3">
            <p className="roomsName">Master Bedroom</p>
            <p className="roomsTemp">69</p>    
            <i className="fa fa-bar-chart" aria-hidden="true" id="room3Stats" onClick={this.props.roomStatsClicked}></i>
          </div>

*/ //OLD ROOM OVERVIEW          