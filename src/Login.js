import React, { Component } from 'react';
import './css/login.css';  

var firebase = require("firebase");

var goHome;


class Login extends Component {  

  componentDidMount=(e)=>{
    goHome = this.props.loginGood;
  }

  componentDidUpdate=(e)=>{
   
    
  }

  handleLoginClick=(e)=>{
    console.log("LOGIN CLICKED");
    var usernameInner = document.getElementById('usernameLogin').value;
    var passwordInner = document.getElementById('passwordLogin').value;
    console.log("USERNAME: " + usernameInner + " , PASSWORD: " + passwordInner);
    firebase.auth().signInWithEmailAndPassword(usernameInner, passwordInner).catch(function(error) {
      // Handle Errors here.
      //var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      
      // ...
    }).then(function(){

      console.log(firebase.auth().currentUser);
      goHome();


    });
  }

  render() {
    //console.log(this.props.currentUser);

     
    return (
        <div className="Login">            
            <div className="welcomeDivLogin row">

                <h1 className="secondaryTitleLogin" id="titleDynamicLogin">WELCOME</h1>
                <h1 className="actionTitleLogin">Please Log In</h1>

                <div className="inputFieldsLogin">
                  <input className="loginInputField" id="usernameLogin" placeholder="Username (e-mail)"></input>
                  <input className="loginInputField" id="passwordLogin" placeholder="Password"></input>
                </div>   
            </div>

            <div className="buttonsDiv">
              <button className="loginClickButton buttons" onClick={this.handleLoginClick}>LOG IN</button>
              <button className="cancelLoginButton buttons" onClick={this.props.back}>CANCEL</button>
            </div>
        </div>
    );
  }
}

export default Login;
