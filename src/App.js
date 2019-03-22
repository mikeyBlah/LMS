import React, { Component } from 'react';
import './App.css';
import Enterform from './Enterform/Enterform';
import LoginPanel from './LoginPanel/LoginPanel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginPanel />
        <Enterform />
      </div>
    );
  }
}

export default App;
