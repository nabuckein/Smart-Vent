import React, { Component } from 'react';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import NavigationBar from './NavigationBar';


import './css/signuporlogin.css';
  

var firebase = require("firebase");
  
class SignupOrLogin extends Component {  

  

  constructor(props){
    super(props);   


    this.state={
      componentToDisplay:this.props.componentToDisplay
    }

  }


  componentWillMount=(e)=>{
       
  }

  componentDidUpdate=(e)=>{
   
    
  }
  
  handleSignupClick=(e)=>{
    this.setState({componentToDisplay:'Signup'});
  }
  handleSignupSubmitClick=(e)=>{
    
    this.setState({componentToDisplay:'Home'});
  }

  handleLoginClick=(e)=>{
    this.setState({componentToDisplay:'Login'});
  }
  handleCancelClick=(e)=>{
    this.setState({componentToDisplay:'SignupOrLogin'});
  }
  toHome=(e)=>{
    this.setState({componentToDisplay:'Home'});
  }
  handleLogoutClickAtNavigationBar=(e)=>{

    firebase.auth().signOut().then((e)=> {
      // Sign-out successful.
      console.log("USER HAS LOGGED OUT SUCCESFULLY");      
      this.handleCancelClick();

    }).catch(function(error) {
      // An error happened.
      console.log("AN ERROR HAS OCCURRED WHEN LOGGING OUT FROM FIREBASE" + error);
    });
  }
 
  render() {

    if(this.state.componentToDisplay === 'Home'){

      
      return (
        <div>
          <NavigationBar logoutClickAtNavigationBar={this.handleLogoutClickAtNavigationBar} />
          <Home logout={this.handleCancelClick} />
        </div>
      );

    }
    else if(this.state.componentToDisplay === 'Signup'){
      return <Signup back={this.handleCancelClick} signupGood={this.toHome}/>;
    }
    else if(this.state.componentToDisplay === 'Login'){
      return <Login back={this.handleCancelClick} loginGood={this.toHome}/>;
    }
    else if(this.state.componentToDisplay === 'SignupOrLogin'){
      return (
        <div className="SignupOrLogin">            
            <div className="welcomeDiv row">
              <h1 className="secondaryTitle" id="titleDynamic">WELCOME</h1>
              <h1 className="actionTitle">Please Sign Up or Log In</h1>                
            </div>
            <div className="buttonsDiv">
              <button className="signupButton buttons" onClick={this.handleSignupClick}>SIGN UP</button>
              <button className="loginButton buttons" onClick={this.handleLoginClick}>LOG IN</button>
            </div>            
        </div>
      );
       
    }
    else{
        return null;
    }   
  }
}

export default SignupOrLogin;
