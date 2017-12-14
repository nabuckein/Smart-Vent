import React, { Component } from 'react';
import Radium from 'radium';
import {StyleRoot} from 'radium';

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
      <div style={styles.StyleRootParent}>
        <StyleRoot style={styles.StyleRoot}>
          <div className="AddRoom" style={styles.AddRoom}>    
            <div className="addRoomsDiv" style={styles.addRoomDiv}>
                <p className="addRoomTitle" style={styles.addRoomTitle}>Add a room</p>
                <i className="fa fa-plus-circle" style={styles.icon} aria-hidden="true" onClick={this.props.showRoomSetup}></i>
            </div>      
          </div>
        </StyleRoot> 
      </div>
    );
  }
}

export default AddRoom;


const styles = {
  StyleRootParent:{
    
  },
  StyleRoot:{
    
    
  },
  AddRoom:{
    background: 'rgb(40,175,255)',
    textAlign:'center',
    border:'solid 3px transparent',
    borderRadius:5,         
    marginRight:20,
    marginLeft:20,
    marginTop:20,
    ':hover':{
      border: 'solid white 3px',
    },
    height:'100%'
  },
  addRoomDiv:{    
    textAlign: 'center', 
    marginBottom: 20,  
    
    

  },
  addRoomTitle:{
    fontSize:40
  },
  icon:{
    fontSize:50
  }

}