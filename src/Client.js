
import React from 'react'
import { useEffect, useState } from 'react';
import './Client.css';
import jwt_decode from "jwt-decode";


export default function Client() {
   
    const [ user, setUser ]= useState({});

    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID TOKEN: " + response.credential);
        var userObject= jwt_decode(response.credential);
        console.log(userObject);
        setUser(userObject);
        document.getElementById("signInDiv").hidden=true;
    }
    function handleSignOut(event) {
      setUser({});
      document.getElementById("signInDiv").hidden= false;
      
    }
    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "345385160678-oo0krbr62n4mm5h5pqdik19vlq3c1im8.apps.googleusercontent.com",
            callback: handleCallbackResponse

        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large"}
        
        );
    }, []);

  return (

    <div className= "Client">
        <div id="signInDiv"> </div>
        { Object.keys(user).length !== 0 &&
        <button onClick={ (e) => handleSignOut(e)}> Sign out </button>
        }
        { user &&
        <div>
          <img src= {user.picture}></img>
          <h3> <span> {user.name} </span></h3>
          
          </div>
          }
    </div>
  );
}
