import React, { Component } from 'react';

import './css/roomdetails.css';
  

    

class RoomDetails extends Component {  

  
  componentDidMount=(e)=>{
    console.log("ROOMDETAILS MOUNTED!");
  }

  

 
  render() {

    return (
        <div className="Roomdetails">            
            <p>{this.props.roomTitle}</p>

            
        </div>
    );
  }
}

export default RoomDetails;
