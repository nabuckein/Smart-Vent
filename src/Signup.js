import React, { Component } from 'react';
import './css/signup.css';
  

var firebase = require("firebase");

var goHome;

 
class Signup extends Component {    

  constructor(props){
    super(props);   

    this.userObj = null; //changed to null, change back if it doesn't work
  }
  componentDidMount=(e)=>{
    goHome = this.props.signupGood;
  }

  handleSubmitClick=(e)=>{
    var enteredFirstname = document.getElementById("firstnameSignup").value; //HOW DO WE PASS THESE IN ORDER TO CREATE NEW USER??
    var enteredLastname = document.getElementById("lastnameSignup").value;
    var enteredPassword = document.getElementById("passwordSignup").value;
    var enteredEmail = document.getElementById("emailSignup").value;
    var username = '';
    //var database = firebase.database();
    if(enteredLastname === null){
      username = enteredFirstname;
    }else{
      username = enteredFirstname + " " + enteredLastname;
    }


    firebase.auth().createUserWithEmailAndPassword(enteredEmail, enteredPassword).then(function() {
      // Handle Errors here.
      //var errorCode = error.code;
      var user = firebase.auth().currentUser;
      user.updateProfile({
        displayName:username
      });
      firebase.database().ref('Users/' + username).set({        
        email: enteredEmail,
        initialSetupComplete:false
      });
      goHome();
    }, function(error){
      //console.log("SIGNUP SUCCESFUL: " + firebase.auth().currentUser);
      var errorMessage = error.message;
      console.log("SIGNUP COMPONENT ERROR, SEE LINE 51 " + errorMessage);
    });
  }

  render() {
    return (
        <div className="Signup">            
            <div className="welcomeDiv row">

                <h1 className="secondaryTitle" id="titleDynamic">WELCOME</h1>
                <h1 className="actionTitle">Please Sign Up</h1>

                <div className="inputFields">
                  <input className="signupInputField" id="firstnameSignup" placeholder="First name or your nickname"></input>
                  <input className="signupInputField" id="lastnameSignup" placeholder="Last name (optional)"></input>
                  <input className="signupInputField" id="passwordSignup" placeholder="Password"></input>
                  <input className="signupInputField" id="emailSignup" placeholder="E-mail address"></input>    
                </div>   
            </div>

            <div className="buttonsDiv">
              <button className="submitSignupButton buttons" onClick={this.handleSubmitClick}>SUBMIT</button>
              <button className="cancelSignupButton buttons" onClick={this.props.back} >CANCEL</button>
            </div>
        </div>
    );
  }
}

export default Signup;
