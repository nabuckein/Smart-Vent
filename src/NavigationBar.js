import React, { Component } from 'react';

import './css/navigationbar.css';
  
class NavigationBar extends Component {  

 
  render() {

    return (
      <div className="NavigationBar">    
        <p className="navBarTitle">HOME</p>        
        <p className="navBarTitle">SETTINGS</p>
        <p className="navBarTitle" onClick={this.props.logoutClickAtNavigationBar}>LOG OUT</p>
            
      </div>
    );
  }
}

export default NavigationBar;
