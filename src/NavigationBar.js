import React, { Component } from 'react';
import Radium from 'radium';
import {StyleRoot} from 'radium';
//import './css/navigationbar.css';
  
class NavigationBar extends Component {  

 
  render() {

    return (
    	<div>
	    	<StyleRoot>
		    	<div className="NavigationBar" style={styles.NavigationBar}>    
			        <p className="navBarTitle" key="titleText1" style={styles.titleText}>HOME</p>        
			        <p className="navBarTitle" key="titleText2" style={styles.titleText}>SETTINGS</p>
			        <p className="navBarTitle" key="titleText3" style={styles.titleText} onClick={this.props.logoutClickAtNavigationBar}>LOG OUT</p>	            
			    </div>
		    </StyleRoot>
	    </div>
	      
    );
  }
}

export default NavigationBar;

const styles={
	NavigationBar:{
		display: 'flex',
		justifyContent: 'center',
		
		background:'white',
		marginTop:5
	},
	
	titleText:{
		color: '#22d0ff',
		fontFamily: 'Poiret One',

		':hover':{
			color: 'purple',
		},
		'@media (min-width:0px) and (max-width:320px)':{
		    fontSize:16,
		    marginLeft:'3%',
			marginRight:'3%',
			marginTop:5,
			marginBottom:5
		},
		'@media (min-width:320px) and (max-width:540px)':{
		    fontSize:20,
		    marginLeft:'3%',
			marginRight:'3%',
			marginTop:5,
			marginBottom:5
		},    
		'@media (min-width:540px) and (max-width:760px)':{
	        fontSize:24,
		    marginLeft:'2%',
			marginRight:'2%',
			marginTop:5,
			marginBottom:5
	    },    
	    '@media (min-width:760px) and (max-width:920px)':{
		    fontSize:26,
		    marginLeft:'2%',
			marginRight:'2%',
			marginTop:5,
			marginBottom:5
		},
		'@media (min-width:920px)':{
		    fontSize:26,
		    marginLeft:'2%',
			marginRight:'2%',
			marginTop:5,
			marginBottom:5
			
		}    
	
	}
}