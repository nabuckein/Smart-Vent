import React, { Component } from 'react';
import Readings from './Readings';
import RoomDetails from './RoomDetails';
import RoomSetup from './RoomSetup';


import './css/home.css';
  
var firebase = require("firebase");


class Home extends Component {  

  

  constructor(props){ 
    super(props);   

    this.display = null;
    this.state = {
      roomStatsToDisplay:'none', 
      initialSetupComplete:false
    }
  }


  componentDidMount=(e)=>{
    console.log("HOME MOUNTED!");
  }

  componentDidUpdate=(e)=>{
    
    
  }

  componentWillMount=(e)=>{
    var currentUser = firebase.auth().currentUser;
    firebase.database().ref('Users/' + currentUser.displayName + '/initialSetupComplete').on('value',(snapshot)=> {
      this.setState({initialSetupComplete : snapshot.val()})
      // ...
    });


  }
  
  roomClickHandle=(e)=>{
    console.log(e.target.id);
    if(e.target.id === "room1Stats"){
      this.setState({roomStatsToDisplay:'LivingRoom'});
    }else if(e.target.id === "room3Stats"){
      this.setState({roomStatsToDisplay:'Room3'});
    }
    
  }
 
  render() {

    
    /*if(!this.state.initialSetupComplete){
      this.display = <InitialSetup/>;
      

    }else{ */
      if(this.state.roomStatsToDisplay === 'none' || this.state.roomStatsToDisplay === null){
        this.display = <Readings roomStatsClicked={this.roomClickHandle} />;
      }else if(this.state.roomStatsToDisplay ==='LivingRoom'){
        this.display = <RoomDetails roomTitle="Living Room"/>;
      }else if(this.state.roomStatsToDisplay ==='Room3'){
        this.display = <RoomDetails roomTitle="Room 3"/>;
      }
    
    //}

    var email = "Test";


    return (
        <div className="Home">            
            <div className="welcomeDiv row">
                
                <h1 className="secondaryTitle" id="titleDynamic">WELCOME {email}</h1>
                
                {this.display}
                
            </div>

            
        </div>
    );
  }
}

export default Home;
