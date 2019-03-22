import React from 'react';
import './Enterform.css';

const enterform = () => {
  return <div className="enterFormContainer">
    <form className="loginForm">
      <h2 className="formHead">Login to your account</h2>
      <div className="inputContainer">
        <div className="icoCont"></div>
        <input className="inputField" type="text" name="firstname" placeholder="Username"/>
      </div>
      <div className="inputContainer">
        <div className="icoCont"></div>
        <input className="inputField" type="password" name="lastname" placeholder="Password"/>
      </div>
      <input className="submitButton" type="submit" value="LOGIN"/>
      <p><a href="">Forgot Password?</a></p>
      <p>Don't have an account?<a href=""> Create one</a></p>
    </form>
  </div>

};

export default enterform;
