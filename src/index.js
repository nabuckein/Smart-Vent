import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignupOrLogin from './SignupOrLogin';
//import Signup from './Signup';
//import Login from './Login';
import registerServiceWorker from './registerServiceWorker';


var firebase = require("firebase");
var config = {
      apiKey: "AIzaSyCBMO4w1MWl4t7VVqeeX_JN7wlDLv5H46Y",
      authDomain: "smartvent-69142.firebaseapp.com",
      databaseURL: "https://smartvent-69142.firebaseio.com",
      projectId: "smartvent-69142",
      storageBucket: "smartvent-69142.appspot.com",
      messagingSenderId: "625620824195"
};

firebase.initializeApp(config); 


var componentToDisplay = 'SignupOrLogin';

firebase.auth().onAuthStateChanged(function(user) {
       
    if (user) {
      // User is signed in.
      console.log("User has logged in: " + user.email);
      componentToDisplay = 'Home';
      ReactDOM.render(<SignupOrLogin componentToDisplay={componentToDisplay}/>, document.getElementById('root'));
	registerServiceWorker();
    } else {
      // No user is signed in.
      componentToDisplay = 'SignupOrLogin';
      console.log("NO USER SIGNED IN!" + componentToDisplay);
      ReactDOM.render(<SignupOrLogin componentToDisplay={componentToDisplay}/>, document.getElementById('root'));
	registerServiceWorker();
    }

    

    });






    
    

