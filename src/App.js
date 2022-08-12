import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
function App() {
  const adminUser = {
    email: "newuser@newuser.com",
    password: "user123"
  }
  const [user, setUser] = useState({name:"",email:""});
  const [error, setError] = useState("");
  const Login = details => {
    console.log(details);
    if (details.email === adminUser.email && details.password === adminUser.password){
      console.log("logged in");
      setUser( {
        name: details.name,
        email: details.email
      }); }
    else {
      console.log("details do not match");
      setError("Recheck Your Credentials Buddy!");
    }
  }
  const Logout = () => {
    setUser({name:"", email:""});
  }
  return (
  <div className= "App">
    {(user.email!=="") ? (
      <div className = "welcome">
        <h2> Greetings , <span> {user.name} </span></h2>
        <h3> Congratulations on being part of the team! The whole company welcomes you, and we look forward to a successful journey with you! Welcome aboard! </h3>
        <button onClick={Logout}> Goodbye! </button>
      </div> 
    ): (
      <LoginForm Login={Login} error={error} />
    )}
  </div>
  );
}
export default App;





