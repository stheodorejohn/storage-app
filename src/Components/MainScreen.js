import React from "react";
import Signup from "./Signup";
import {useState} from 'react';
import Login from "./Login";

function MainScreen(){


    const afterSignup = (user) => {
        alert(user + 'signedup Successfully');
        
    }

    var [loginScreen, setLoginScreen] = useState( false);
    var [signupScreen, setSignupScreen] = useState( false);

 const afterSignup = (username) => {

 }
    return(
        <div className="MainScreen">
           {signupScreen?<Signup afterSignup={()=>{afterSignup}} /> : '' }
           {loginScreen?<Login afterLogin={()=>{afterLogin}} /> : '' }
<button onClick = {()=> {setSignupScreen(true); setLoginScreen(false) }}>do Signup</button>
<button onClick = {()=> {setSignupScreen(false); setLoginScreen(true) }}>do Login</button>

        </div>
    );
}

export default MainScreen;