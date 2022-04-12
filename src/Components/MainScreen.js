import React from "react";
import Signup from "./Signup";
import {useState, useEffect} from 'react';
import Login from "./Login";

// https://www.youtube.com/watch?v=EDOs1Vgxj6M

function MainScreen(){


    const afterSignup = (user) => {
        alert(user + 'signedup Successfully');
        
    }

    var [loginScreen, setLoginScreen] = useState( false);
    var [signupScreen, setSignupScreen] = useState( false);
    var [loginedScreen, setLoginedScreen] = useState(false);

 const afterSignup = (username) => {
    setSignupScreen(false); 
    setLoginScreen(false);
    setLoginedScreen(true);
 }
    return(
        <div className="MainScreen">
           {signupScreen?<Signup afterSignup={()=>{afterSignup}} /> : '' }
           {loginScreen?<Login afterLogin={()=>{afterLogin}} /> : '' }
<button onClick = {()=> {setSignupScreen(true); setLoginScreen(false) }}>do Signup</button>
<button onClick = {()=> {setSignupScreen(false); setLoginScreen(true) }}>do Login</button>
        {loginedScreen?<div> 
            <h1>{localStorage.getItem('userLogged')}logined </h1>
             </div>}
        </div>
    );
}

export default MainScreen;