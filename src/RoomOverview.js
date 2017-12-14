import React, { Component } from 'react';
import Radium from 'radium';
import {StyleRoot} from 'radium';
var firebase = require("firebase");
  
class RoomOverview extends Component {  

 	constructor(props){ 
    super(props);   

	    this.user = firebase.auth().currentUser;
	    this.amountOfRooms = 0;
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
	    //var rooms;
	    firebase.database().ref('Users/' + this.user.displayName + '/rooms/' + this.props.title).remove();
	    
  	}	
  	

  render() {

    return (
      <div style={styles.StyleRootParent}>
        <StyleRoot style={styles.StyleRoot}>
          <div className="RoomOverview" style={styles.RoomOverview}>    
            <div className="rooms" style={styles.rooms}>
                <p className="roomsName" style={styles.roomsName}>{this.props.title}</p>
                <p className="roomsTemp" style={styles.roomsTemp}>72</p>    
                <i className="fa fa-sliders" key='icon1' aria-hidden="true" onClick={this.props.toRoomSettings} style={styles.icons}></i>
                <i className="fa fa-bar-chart" key='icon2' aria-hidden="true" style={styles.icons}></i>
    			      <i className="fa fa-trash" key='icon3' aria-hidden="true" onClick={this.handleRemoveRoom} style={styles.icons}></i>
            </div>            
          </div>
        </StyleRoot>
      </div>
    );
  }
}

export default RoomOverview;


const styles={
  StyleRootParent:{    
    
  },
  StyleRoot:{

  },
  RoomOverview:{
    background: 'rgb(30,225,0)',
    textAlign:'center',
    border:'solid 3px rgb(30,225,0)',
    borderRadius:5,
    marginRight:20,
    marginLeft:20,
    marginTop:20
  },
  rooms:{    
    margin:0
  }, 
  roomsName:{
    fontSize:40
  },
  roomsTemp:{
    fontSize:50
  },
  icons:{
    fontSize:40,    
    ':hover':{
      color:'blue'
    }
    
  }
}


/* CSS WITH FLEXBOX
const styles={
  StyleRootParent:{
    '@media (min-width:0px) and (max-width:320px)':{      
      width:'50%'
    },
    '@media (min-width:320px) and (max-width:540px)':{      
      width:'65%'
    },
    '@media (min-width:540px) and (max-width:760px)':{
      width:'50%'
    },
    '@media (min-width:760px) and (max-width:920px)':{
      width:'30%'
    },
    '@media (min-width:920px)':{
      width:'25%'
    },
    display:'flex',
    justifyContent:'center'
  },
  StyleRoot:{
    width:'100%'
    
    
  },
  RoomOverview:{

    background: 'rgb(30,225,0)',
    textAlign:'center',
    paddingBottom:25,
    border:'solid 3px rgb(30,225,0)',
    borderRadius:5,
    width:'100%',
    marginBottom:20
  },
  rooms:{
    
    margin:0
  },
  roomsName:{
    '@media (min-width:0px) and (max-width:320px)':{
      fontSize:20,
      marginBottom:0
    },
    '@media (min-width:320px) and (max-width:540px)':{
      fontSize:26
    },
    '@media (min-width:540px) and (max-width:760px)':{
      fontSize:30
    },
    '@media (min-width:760px) and (max-width:920px)':{
      fontSize:28
    },
    '@media (min-width:920px)':{
      fontSize:26
    }
  },
  roomsTemp:{
    '@media (min-width:0px) and (max-width:320px)':{
      fontSize:30,
      marginTop:10,
      marginBottom:10
    },
    '@media (min-width:320px) and (max-width:540px)':{
      fontSize:46
    },
    '@media (min-width:540px) and (max-width:760px)':{
      fontSize:52
    },
    '@media (min-width:760px) and (max-width:920px)':{
      fontSize:38
    },
    '@media (min-width:920px)':{
      fontSize:60
    }
  },
  icons:{
    '@media (min-width:0px) and (max-width:320px)':{
      fontSize:24,
      marginLeft:10,
      marginRight:10
    },
    '@media (min-width:320px) and (max-width:540px)':{
      fontSize:26,
      marginLeft:10,
      marginRight:10 
    },
    '@media (min-width:540px) and (max-width:760px)':{
      fontSize:30,
      marginLeft:10,
      marginRight:10
    },
    '@media (min-width:760px) and (max-width:920px)':{
      fontSize:24,
      marginLeft:10,
      marginRight:10
    },
    '@media (min-width:920px)':{
      fontSize:38,
      marginLeft:10,
      marginRight:10
    },
    ':hover':{
      color:'blue'
    }
    
  }
}
*/